<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discount</title>
</head>
<body>
    <script>
        let itemQuantity = 5;
        let itemPrice = 25;
        let userBalance = 150;

        let isPremiumMemb = true;
        let isDiscValid = true;

        let subtotal = itemQuantity * itemPrice;
        console.log(`Subtotal = ${subtotal}`);

        let eligibleMemb = subtotal > 100 && (isPremiumMemb || isDiscValid);

        let discountRate = eligibleMemb ? 0.20 : 0;
        let discountAmount = subtotal * discountRate;
        let finalTotal = subtotal - discountAmount;

        console.log(`Discount = ${discountAmount}`);
        console.log(`Final Total = ${finalTotal}`);
    </script>
</body>
</html>
