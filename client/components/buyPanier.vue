<template>
    <div>
        <div class="form" id="form">
            <form onsubmit="buy()">
                <div class="title">Delivery</div>
                <div class="subtitle">Delivery address</div>
                <div class="input-container ic1">
                    <input id="address" required class="input" type="text" placeholder=" " aria-label="address">
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Address</label>
                </div>
                <div class="input-container ic2">
                    <input id="city" required class="input" type="text" placeholder=" " aria-label="city">
                    <div class="cut cut-short"></div>
                    <label for="lastname" class="placeholder">City</label>
                </div>
                <div class="input-container ic2">
                    <input id="postalcode" required class="input" type="text" placeholder=" " aria-label="postalcode">
                    <div class="cut"></div>
                    <label for="email" class="placeholder">Postal code</label>
                </div>
                <input type="submit" class="submit" value="Buy">
            </form>
         </div>
    </div>

</template>

<style scoped>

body {
  align-items: center;
  background-color: #990000;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.form {
  background-color: #990000;
  border-radius: 20px;
  box-sizing: border-box;
  height: 550px;
  padding: 20px;
  width: 450px;
  margin: auto;
  margin-top: 10px;
}

form {
    background-color: #990000;
}

.title {
    background-color: #990000;
    color: #fff4f3;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
}

.subtitle {
    background-color: #990000;
  color: #fff4f3;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
  background-color: #990000;
  margin: 0;
  padding-left: 0;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #fff4f3;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #990000;
  font-size: 20px;
  height: 100%;
  outline: 0;
  padding: 20px 0;
  width: 100%;
  margin-top: 5px;
}

.cut {
  background-color: #990000;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #990000;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  background-color: #990000;
  color:#fff4f3;
}

.input:focus ~ .placeholder {
    background-color: #990000;
    color: #fff4f3;
}

.submit {
  background-color: #fff4f3;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #990000;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #990000;
  color:#fff4f3;
}


</style>