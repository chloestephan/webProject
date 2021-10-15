<template>
    <div>
        <form onsubmit="window.open('/thankYou','popup','width=700,height=400,left=200,top=200,scrollbars=1')">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" aria-label="address" required>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" aria-label="city" required>
            <label for="postalcode">Postal code:</label>
            <input type="text" id="postalcode" name="postalcode" aria-label="postalcode" required>
            <input type="submit" value="Buy">
        </form>
    </div>

</template>

<script>

</script>

<style scoped>

</style>