/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("TSS.SharpedJs", function ($asm, globals) {
    "use strict";

    /** @namespace TSS.Another */

    /**
     * This class I used for localizing application. Maybe there is an easier way, but I was too lazy to search it, I admit.
     <p />
     Этот класс я использовал для локализаии приложения. Может есть способ проще, но мне было лень разбиратся, признаю.
     *
     * @class TSS.Another.LanguageHandler
     */
    Bridge.define("TSS.Another.LanguageHandler", {
        statics: {
            lh: null,
            WindowTitlesPrefix: "TSS - ",
            config: {
                init: function () {
                    this.lh = new TSS.Another.LanguageHandler(TSS.Another.LanguageHandlerCulture.en);
                }
            },
            getInstance: function () {
                return TSS.Another.LanguageHandler.lh;
            },
            setLanguage: function (languageHandlerCulture) {
                TSS.Another.LanguageHandler.lh = new TSS.Another.LanguageHandler(languageHandlerCulture);
            }
        },
        universeInfoStringFormatter: "Width:{0};\nHeight:{1};\nTotal cell count:{2};\nTotal energy in universe:{3};\nTick number:{4};\nCount of cell types:{5}\nMost fit cell info:",
        cellInfoStringFormatter: "Genome:\n\thunger:{0},\n\taggression:{1},\n\treproduction:{2},\n\tcollectivity:{3},\n\tpoison addiction:{4},\n\tcorpse addiction:{5};\nCount with this genome:{6};\nColor:",
        cellInfoWindowTitle: "TSS - Cell info",
        fieldRedactorSizeWarning: "Universe size is too big for this option.",
        applyButtonText: "Apply",
        modalWindowAboutFoodPlace: "TSS - Food place redactor",
        modalWindowAboutPoisonPlace: "TSS - Poison place redactor",
        checkAllButton: "Check all",
        uncheckAllButton: "Uncheck all",
        windowTitleOfUniverseConstsRedactor: "TSS - Universe consts redactor",
        incorrectValueMsg: "Value at field \"{0}\" is incorrect. It mast be {1} type. ",
        incorrectRangeMsg: "Value of \"{0}\" must be at range from {1} to {2}. ",
        constsUniverseFileCorrupted: "The configuration file is corrupted or can`t be opened. Overwrite it?",
        universeFileCorrupted: "The universe file is corrupted or can`t be opened.",
        cellsCountWarningMessage: "Can`t create cells. Count of cells is a natural number.",
        resolutionWarningMessage: "Set width and height of resolution in range from 100 to 2000.",
        titleOfUniverseOutputWindow: "TSS - Simulation",
        tabItem_SimulationInfoHeader: "Simulation info",
        tabItem_GameHeader: "Game",
        tabItem_ControlsHeader: "Controls",
        buttonClearFieldText: "Clear field",
        buttonConstsRedactorText: "Consts redactor",
        buttonFoodPlaceRedactotText: "Food place redactor",
        buttonGenerateCellsText: "Generate cells",
        buttonGenerateFoodOnAllText: "Generate food on all field",
        buttonPauseText: "Pause",
        buttonPosinPlaceRedactotText: "Poison place redactor",
        buttonResetResolutionText: "Set resolution",
        buttonSaveUniverseText: "Save universe",
        buttonStarText: "Start",
        labelCellsCountText: "Cells count",
        labelDelayText: "Delay",
        labelHeightText: "Height",
        labelWidthText: "Width",
        buttonOk: "OK",
        buttonCancel: "Cancel",
        universeSizeWarning: "Universe side must be at range from 2 to 1000.",
        outOfMemory: "Out of memory. We need to close simulation.",
        buttonCreateUniverse: "Create universe",
        buttonLoadUniverse: "Load universe",
        buttonAbout: "About",
        aboutText: "You can read how to play in manual in game folder.\nAuthor contacts\n\tMail: yuram1box@gmail.com\n\tVk: vk.com/yura_mysko \n\tTelephone: +380987739725",
        mainWindowTitle: "TSS - Main window",
        ctor: function (language) {
            this.$initialize();

            switch (language) {
                case TSS.Another.LanguageHandlerCulture.en: 
                    this.initLanguage_En();
                    break;
                case TSS.Another.LanguageHandlerCulture.ru: 
                    this.initLanguage_Ru();
                    break;
            }
        },
        initLanguage_En: function () {
            this.universeInfoStringFormatter = "Width:{0};\nHeight:{1};\nTotal cell count:{2};\nTotal energy in universe:{3};\nTick number:{4};\nCount of cell types:{5}\nMost fit cell type:";
            this.cellInfoStringFormatter = "Genome:\n\thunger:{0},\n\taggression:{1},\n\treproduction:{2},\n\tcollectivity:{3},\n\tpoison addiction:{4},\n\tcorpse addiction:{5};\nCount with this genome:{6};\nColor:";
            this.cellInfoWindowTitle = "TSS - Cell info";
            this.fieldRedactorSizeWarning = "Universe size is too big for this option.";
            this.applyButtonText = "Apply";
            this.modalWindowAboutFoodPlace = "TSS - Food place redactor";
            this.modalWindowAboutPoisonPlace = "TSS - Poison place redactor";
            this.checkAllButton = "Check all";
            this.uncheckAllButton = "Uncheck all";
            this.windowTitleOfUniverseConstsRedactor = "TSS - Universe consts redactor";
            this.incorrectValueMsg = "Value at field \"{0}\" is incorrect. It mast be {1} type. ";
            this.incorrectRangeMsg = "Value of \"{0}\" must be at range from {1} to {2}. ";
            this.constsUniverseFileCorrupted = "The configuration file is corrupted or can`t be opened. Overwrite it?";
            this.universeFileCorrupted = "The universe file is corrupted or can`t be opened.";
            this.cellsCountWarningMessage = "Can`t create cells. Count of cells is a natural number < 50000.";
            this.resolutionWarningMessage = "Set width and height of resolution in range from 100 to 2000.";
            this.titleOfUniverseOutputWindow = "TSS - Simulation";
            this.tabItem_SimulationInfoHeader = "Simulation info";
            this.tabItem_GameHeader = "Game";
            this.tabItem_ControlsHeader = "Controls";
            this.buttonClearFieldText = "Clear field";
            this.buttonConstsRedactorText = "Consts redactor";
            this.buttonFoodPlaceRedactotText = "Food place redactor";
            this.buttonGenerateCellsText = "Generate cells";
            this.buttonGenerateFoodOnAllText = "Generate food on all field";
            this.buttonPauseText = "Pause";
            this.buttonPosinPlaceRedactotText = "Poison place redactor";
            this.buttonResetResolutionText = "Set resolution";
            this.buttonSaveUniverseText = "Save universe";
            this.buttonStarText = "Start";
            this.labelCellsCountText = "Cells count";
            this.labelDelayText = "Delay";
            this.labelHeightText = "Height";
            this.labelWidthText = "Width";
            this.buttonOk = "Ok";
            this.buttonCancel = "Cancel";
            this.universeSizeWarning = "Universe side must be at range from 2 to 1000.";
            this.outOfMemory = "The application uses too much memory. We need to close simulation.";
            this.buttonCreateUniverse = "Create universe";
            this.buttonLoadUniverse = "Load universe";
            this.buttonAbout = "About";
            this.aboutText = "You can read how to play in manual in game folder.\nAuthor contacts\n\tMail: yuram1box@gmail.com\n\tVk: vk.com/yura_mysko \n\tTelephone: +380987739725";
            this.mainWindowTitle = "TSS - Main window";
        },
        initLanguage_Ru: function () {
            this.universeInfoStringFormatter = "Ширина:{0};\nДлина:{1};\nКлеток на поле:{2};\nВсего энергии во вселенной:{3};\nНомер тика:{4};\nВсего типов клеток:{5}\nСамый успешный тип клеток:";
            this.cellInfoStringFormatter = "Геном:\n\tГолод:{0},\n\tАгрессия:{1},\n\tРепродуктивность:{2},\n\tКоллективность:{3},\n\tТяга к яду:{4},\n\tТяга к мертвым клеткам:{5};\nКоличество клеток с этим геномом:{6};\nЦвет:";
            this.cellInfoWindowTitle = "TSS - Информация ок клетке";
            this.fieldRedactorSizeWarning = "Размер вселенной слишком большой чтобы использовать эту функцию.";
            this.applyButtonText = "Подтвердить";
            this.modalWindowAboutFoodPlace = "TSS - Редактор размещения еды";
            this.modalWindowAboutPoisonPlace = "TSS - Редактор размещения  яда";
            this.checkAllButton = "Отметить все";
            this.uncheckAllButton = "Убрать отмеченное";
            this.windowTitleOfUniverseConstsRedactor = "TSS - Редактор констант вселенной";
            this.incorrectValueMsg = "Значение поля \"{0}\" некорректно. Оно должно иметь тип {1}. ";
            this.incorrectRangeMsg = "Значение поля \"{0}\" должно быть числом в промежутке от {1} до {2}. ";
            this.constsUniverseFileCorrupted = "Файл настроек поврежден или не может быть открыт. Перезаписать его?";
            this.universeFileCorrupted = "Файл со вселенной поврежден или не может быть открыт.";
            this.cellsCountWarningMessage = "Создание клеток невозможно. Количество клеток - натуральное число  < 50000.";
            this.resolutionWarningMessage = "Ширина и длина должно быть числом в промежутке от 100 до 2000.";
            this.titleOfUniverseOutputWindow = "TSS - Симуляция";
            this.tabItem_SimulationInfoHeader = "Статистика";
            this.tabItem_GameHeader = "Игра";
            this.tabItem_ControlsHeader = "Управление";
            this.buttonClearFieldText = "Очистить поле";
            this.buttonConstsRedactorText = "Редактор констант";
            this.buttonFoodPlaceRedactotText = "Редактор размещения еды";
            this.buttonGenerateCellsText = "Сгенерировать клетки";
            this.buttonGenerateFoodOnAllText = "Заполнить поле едой";
            this.buttonPauseText = "Пауза";
            this.buttonPosinPlaceRedactotText = "Редактор размещения яда";
            this.buttonResetResolutionText = "Сменить разрешение";
            this.buttonSaveUniverseText = "Сохранить вселенную";
            this.buttonStarText = "Старт";
            this.labelCellsCountText = "Кол. клеток";
            this.labelDelayText = "Задержка";
            this.labelHeightText = "Длина";
            this.labelWidthText = "Ширина";
            this.buttonOk = "Ок";
            this.buttonCancel = "Отмена";
            this.universeSizeWarning = "Сторона вселенной должна быть в промежутке от 2 до 1000.";
            this.outOfMemory = "Приложение использует слишком много оперативной памяти. Мы вынуждены остановить симуляцию.";
            this.buttonCreateUniverse = "Создать вселенную";
            this.buttonLoadUniverse = "Загрузить вселенную";
            this.buttonAbout = "Справка";
            this.aboutText = "Вы можете прочитать информацию об игре в мануале в папке с игрой.\nСвязь с автором\n\tПочта: yuram1box@gmail.com\n\tВк: vk.com/yura_mysko \n\tТелефон: +380987739725";
            this.mainWindowTitle = "TSS - Главное окно";
        }
    });

    Bridge.define("TSS.Another.LanguageHandlerCulture", {
        $kind: "enum",
        statics: {
            en: 0,
            ru: 1
        }
    });

    /**
     * The classes in this file is used by all application.
     <p />
     Классы из этого файла используются всем приложением.
     *
     * @class TSS.Another.PointInt
     */
    Bridge.define("TSS.Another.PointInt", {
        x: 0,
        y: 0,
        ctor: function () {
            this.$initialize();
        },
        $ctor1: function (x, y) {
            this.$initialize();
            this.x = x;
            this.y = y;
        }
    });

    Bridge.define("TSS.Another.StableRandom", {
        statics: {
            rd: null,
            config: {
                init: function () {
                    this.rd = new System.Random.ctor();
                }
            }
        }
    });
});
