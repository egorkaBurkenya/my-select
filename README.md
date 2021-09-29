# My Select 🧘🏻

## Подключение
```html
<script type="module">
    import MySelect from './select.js';

    customElements.define('my-select', MySelect);
</script>
```

## Атрибуты
* **options** - передаются через запятую (все пробелы стираются)
* **default** - Значение, которое будет отображаться, пока не один из **options** не будет выбран
* **width** - Ширину можно коректировать передавая, как атрибут 

```html
<my-select 
        options="Математика, Реакт, Английский, Физкика" 
        default="выберите предмет"
        width="12em"
/>
```