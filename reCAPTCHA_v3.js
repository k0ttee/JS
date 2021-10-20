//документация
//https://developers.google.com/recaptcha/docs/v3

//получение пары токенов
//https://www.google.com/recaptcha/admin/create

/////////////////////////////////////////////////////
// зависимости (заменить "ключ" публичным токеном) //
/////////////////////////////////////////////////////

<style>
    .grecaptcha-badge{
        visibility: hidden;
    }
</style>

<script src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script src="//google.com/recaptcha/api.js?render=ПубличныйТокен"></script>

///////////////////////////////////////////////////
// пример формы (обёртка не обязана быть формой) //
///////////////////////////////////////////////////

<div>
	<input type="email" name="email" placeholder="Your Email">
	<div id="go_email" onclick="recaptcha(this)">RUN</div>
</div>
<!-- id нажимаемого элемента обязан совпадать с адресом обработчика на сервере, например go_email.php -->

/////////////////////////////////////////////////////////
// функция готовит токен и вызывает отправку на сервер //
/////////////////////////////////////////////////////////

