# Button
## Описания атома
Компонент необходим для ввода клика на созданное событие / отправки формы
## Пропсы
-    className?: string;

## Маски
- изменена логика ввода "number": убраны все лишние символы (е, +, -), а также добавлено ограничение на первый символ, который не должен быть нулевым
- добавлен тип "textOnly", который может обрабатывать только символы английского и русского алфавитов в разных регистрах
- изменен формат номера телефона в типе "tel":  +78888888888
## Тесты
- Сторибук
- Юнит
## Варианты использования
    <Button
        type={type}
        value={value}
    />


