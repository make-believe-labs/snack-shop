workspace {
    model {
        user = person "Customers" "New or returning Snack Shop Customers"

        group "Snack Shop" {

            snackStaff = person "Snack Shop Staff" "Staff who keep the Snack Shop running to delicious effect"

            storeFront = softwareSystem "Snack Shop Web" "Allows customers to place and track orders for tasty treats" {
                group "Web" {
                    singlePageApplication = container "Single-Page Application" "Displays the range of available snacks" "React" {
                        snackCatalog = component "Snack Catalog" "Make sure each snack is looking its best" "React Component"
                        snackOrders = component "Snack Orders" "Allows users to keep up to date with their orders" "React Component"
                        snackBasket = component "Snack Basket" "Holds the snacks users are going to order" "React Componenet"
                    }
                    storeWebBFF = container "Store Web BFF" "Connects web applications to the backend services" "NestJs"
                }
            }
        
            customerOrders = softwareSystem "Customer Orders" "Keeps track of all new and historical orders from purchase to dispatch" {
                newOrdersService = container "New Orders Service" "Allows creation of new customer orders"
                orderTrackingService = container "Order Tracking Service" "Keeps track of live and historical orders"
                oldOrderRemovalService = container "Old Order Removal Service" "Makes sure very old orders are deleted to safe space"
                orderRepository = container "Order Repository" "Manages all database interactions"
                ordersDatabase = container "Orders Database" "Stores customer orders"
                legacyOrdersDatabase = container "Legacy Orders Database" "Archive of orders from before 2018"
            }
        
            warehouseLogistics = softwareSystem "Warehouse Logistics" "Manages all deliveries and stock"
        }

        group "Delivery Co" {
            deliveryCo = softwareSystem "Delivery Co" "Partner delivery company who collects and delivers orders from warehouse"
        }

        # Relationships between the user and the store front
        user -> storeFront "Browse and purchase snacks"
        user -> singlePageApplication "Purchase snacks"

        # Relationships between the components of the store front

        snackCatalog -> storeWebBFF "Add, remove and checkout snacks"

        singlePageApplication -> storeWebBFF "Create order"
        storeWebBFF -> newOrdersService "Raises order"

        # Relationships between systems
        customerOrders -> warehouseLogistics "Requests stock allocation"
        warehouseLogistics -> deliveryCo "Provide list of orders ready for delivery"
        warehouseLogistics -> orderTrackingService "Update order status"

        # Gimmie those snacks
        deliveryCo -> user "Delivers tasty snacks"

        # Orders System Relationships
        newOrdersService -> orderRepository "Store new orders"
        orderTrackingService -> orderRepository "Store order updates"
        oldOrderRemovalService -> orderRepository "Deletes orders"

        # Database
        orderRepository -> ordersDatabase "Read, write, update and delete"
        orderRepository -> legacyOrdersDatabase "Read orders from before 2018"
    }
    views {
        systemLandscape "SnackShopSystemLandscape" {
            include *
            autoLayout
        }

        systemContext storeFront "StoreFrontContext" {
            include *
            autoLayout
        }

        systemContext customerOrders "CustomerOrdersContext"{
            include *
            autoLayout       
        }

        container customerOrders "CustomerOrderContainers" {
            include *
            autoLayout
        }

        container storeFront "StoreFrontContainers" {
            include *
            autoLayout
        }

        component singlePageApplication "singlePageApplicationComponents" {
            include *
            autoLayout
        }

    }

}