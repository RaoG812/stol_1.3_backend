<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TMA App 2024 - Catering Service</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <div id="app">
        <!-- Welcome Section -->
        <section id="welcome" class="section">
            <h1>Welcome to TMA Catering Service</h1>
            <button onclick="showRegistration()">Get Started</button>
        </section>

        <!-- Registration Form -->
        <section id="registration" class="section hidden">
            <h2>Register</h2>
            <form id="registrationForm">
                <input type="text" id="name" placeholder="Name" required>
                <input type="tel" id="contact" placeholder="Contact Number" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="text" id="address" placeholder="Address" required>
                <button type="submit">Submit</button>
            </form>
        </section>

        <!-- Menu Section -->
        <section id="menu" class="section hidden">
            <h2>Menu</h2>
            <div id="menuItems"></div>
            <button onclick="showOrderSummary()">View Order</button>
        </section>

        <!-- Order Summary -->
        <section id="orderSummary" class="section hidden">
            <h2>Order Summary</h2>
            <div id="orderDetails"></div>
            <button onclick="showDeliveryDetails()">Proceed to Delivery</button>
        </section>

        <!-- Delivery Details -->
        <section id="deliveryDetails" class="section hidden">
            <h2>Delivery Details</h2>
            <input type="date" id="deliveryDate" required>
            <input type="time" id="deliveryTime" required>
            <button onclick="submitOrder()">Submit Order</button>
        </section>
    </div>
    <script src="script.js"></script>
</body>
</html>
