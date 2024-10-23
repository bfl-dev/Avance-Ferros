<script setup>

</script>

<template>
<div class="contacto" id="contacto">
            <div class="contacto-content">
                <RouterLink class="close" to="/">&times;</RouterLink>
                <div class="social-container">
                    <img src="../assets/Instagram.png">
                    <a class="strawberry-was-taken" href="https://www.instagram.com/strawberry_was_taken?igsh=OTk3OTZ4em4zNHV5">
                        @strawberry_was_taken
                    </a>
                </div>
                <div class="social-container">
                    <img src="../assets/Instagram.png">
                    <a class="bfl" href="https://www.instagram.com/255bfl?igsh=Yjkwc201Y3hmeXEy">
                        @255bfl 󰘧
                    </a>
                </div>
                <div class="social-container">
                    <img src="../assets/Instagram.png">
                    <a class="f33gz" href="https://www.instagram.com/f33gz?igsh=MWQxanl3azNmbmQzdQ==">
                        @f33gz
                    </a>
                </div>
            </div>
        </div>
</template>

<style scoped>
.contacto {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}

.contacto-content {
    width: fit-content;
    min-width: 23.375rem;
    margin: 15% auto;
    display: flex;
    padding: 0.9375rem 0.9375rem 4.9375rem 0.9375rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 2.5rem;
    background: #FFF;
    border-radius: 1.25rem;
    border: 3px solid #CACACA
}

.social-container{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    height: 4.25rem;
    padding: 0.625rem 1.25rem;
    align-items: center;
    gap: 1.9375rem;
    align-self: stretch;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.strawberry-was-taken{
    font-family: "Monocraft Nerd Font";
    color: #000;
}

.f33gz{
    font-family: "Comic Sans MS";
    color: #000;
}

.bfl{
  font-family: "JetBrains Mono";
  color: #000;
}
</style>
