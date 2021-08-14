
CLI (консольное приложение) для работы со списком контактов

Для выбора нужного метода необходимо писать: 
'--action {метод} -{ключ} {значение}';

МЕТОДЫ:
1) getList - показать список контактов
2) getByID - найти по указанному id 
3) add - добавить контакт
4) remove - удалить контакт

КЛЮЧИ:
1) i - id
2) n - name
3) e - email
4) p - phone number

ПРИМЕР ДОБАВЛЕНИЯ КОНТАКТА:

$ node index.js --action add -n Mango -e mango@g.mail -p 0912314123

Скриншоты работы приложения:
https://ibb.co/6H7N30q - list
https://ibb.co/pfbW8Ns - get
https://ibb.co/S3CXVqs - add
https://ibb.co/C6VKDDZ - remove




