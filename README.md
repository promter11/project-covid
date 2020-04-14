# Стартовый шаблон
Стартовый шаблон для верстки с использованием PUG, SCSS, JS / jQuery

---

### Начало работы

Прежде чем начать работу с данной сборкой необходимо выполнить описанные ниже действия.

| Пункт | Описание                                  |
|-------|-------------------------------------------|
| 1     | Скачать архив сборки                      |
| 3     | Установить npm                            |
| 4     | Инициализировать git                      |
| 5     | Связать локальный и удаленный репозитории |

---

### Зависимости
* [gulp](https://www.npmjs.com/package/gulp) - Библиотека для работы с Gulp
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - Библиотека для преобразования SCSS файлов
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) - Библиотека для преобразования PUG файлов
* [browser-sync](https://www.browsersync.io/docs/gulp) - Библиотека для работы с LiveReload
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Библиотека для автоматического добавления префиксов для браузеров
* [gulp-cache](https://www.npmjs.com/package/gulp-cache) - Библиотека для осуществления кэширования
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - Библиотека для минификации CSS
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - Библиотека для конкатенации файлов
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) - Библиотека для минификации HTML
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Библиотека для работы с изображениями
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) - Библиотека для переименования файлов
* [del](https://www.npmjs.com/package/del) - Библиотека для удаления файлов и папок
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Библиотека для сжатия JS
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - Транспилятор JS

---

### Команды
- gulp - Сборка файлов и запуск browser-sync для начала слежения за изменениями
- gulp build - Сборка проекта (production)