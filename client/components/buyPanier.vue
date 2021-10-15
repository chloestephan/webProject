<template>
    <div>
        <form onreset="buy()">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" aria-label="address" required>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" aria-label="city" required>
            <label for="postalcode">Postal code:</label>
            <input type="text" id="postalcode" name="postalcode" aria-label="postalcode" required>
            <input type="reset" value="Buy">
        </form>
    </div>

</template>

<script>

</script>

<style scoped>

</style>