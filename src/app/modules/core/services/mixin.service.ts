import { Injectable } from "@angular/core";

@Injectable()
export class MixinService {
    public fr: any;
    public notifOpts: any;
    public emptyMessage: string;
    public maskDate: any[];
    public maskNumber: any;

    /**
     * Creates an instance of MixinService.
     *
     *
     * @memberOf MixinService
     */
    constructor() {
        this.fr = {
            firstDayOfWeek: 0,
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Auo", "Sep", "Oct", "Nov", "Dec"]
        };
        this.notifOpts = {
            position: ["bottom", "right"],
            clickToClose: true,
            maxLength: 100
        };
        this.emptyMessage = "Aucun résultat trouvé";
        this.maskNumber = [/^\d+$/];
        this.maskDate = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
    }

    /**
     * Get calender options
     *
     * @param {((date: string) => void)} onSelect
     * @returns {*}
     *
     * @memberOf MixinService
     */
    calendarOpts(onSelect: ((date: string) => void)): any {
       return {
            altFormat: "dd/mm/yy",
            dateFormat: "dd/mm/yy",
            yearRange: "1900:+nn",
            changeYear: true,
            changeMonth: true,
            dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            onSelect: onSelect
        };
    }

    /**
     * Clone Object
     *
     * @param {*} obj
     * @returns {*}
     *
     * @memberOf MixinService
     */
    clone(obj: any): any {
        let cloneObj = Object.assign({}, obj);
        for (let attribut in obj) {
            if (obj[attribut] instanceof Array) {
                cloneObj[attribut] = new Array();
                for (let item of obj[attribut]) {
                    cloneObj[attribut].push(this.clone(item));
                }
            } else if (typeof obj[attribut] === "object") {
                cloneObj[attribut] = this.clone(cloneObj[attribut]);
            } else {
                cloneObj[attribut] = obj[attribut];
            }
        }
        return cloneObj;
    }

    /**
     * Get current TimeStamp
     *
     * @returns {number}
     *
     * @memberOf MixinService
     */
    getCurrentTimeStamp(): number {
        return new Date().getTime();
    }

    /**
     * Date to string
     *
     * @param {number} [addDays]
     * @returns
     *
     * @memberOf MixinService
     */
    dateToString(date: Date) {
        let dd = date.getDate().toString(),
            mm = (date.getMonth() + 1).toString(), // January is 0!
            yyyy = date.getFullYear().toString(),
            today;

        if (Number.parseInt(dd) < 10) {
            dd = "0" + dd;
        }

        if (Number.parseInt(mm) < 10) {
            mm = "0" + mm;
        }

        return dd + "/" + mm + "/" + yyyy;
    }

    /**
     * Detect IE browser
     *
     * @returns {boolean}
     *
     * @memberOf MixinService
     */
    isIE(): boolean {
        let ua = window.navigator.userAgent;
        let msie = ua.indexOf("MSIE ");
        let trident = ua.indexOf("Trident/");
        let edge = ua.indexOf("Edge/");

        if (msie > 0 || trident > 0 || edge > 0) {
            return true;
        }

        // other browsers
        return false;
    }

    /**
     *  convert Json to CSV data in Angular2
     *
     * @param {any} objArray
     * @param {Array<string>} [humanReadableHeader]
     * @returns
     *
     * @memberOf MixinService
     */
    convertToCSV(objArray: any, humanReadableHeader?: any) {
        let array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
        let str = "";
        let row = "";

        for (let headerCode in objArray[0]) {
            // Now convert each value to string and comma-separated
            let headerLabel = headerCode;
            if (humanReadableHeader && humanReadableHeader[headerCode]) {
                headerLabel = humanReadableHeader[headerCode];
            }
            row += headerLabel + ";";
        }
        row = row.slice(0, -1);
        // Append Label row with line break
        str += row + "\r\n";

        for (let i = 0; i < array.length; i++) {
            let line = "";
            for (let index in array[i]) {
                if (line !== "") line += ";";

                line += array[i][index];
            }
            str += line + "\r\n";
        }
        return str;
    }

    /**
     * Clear validation (delete errors fields)
     *
     * @param {*} model
     *
     * @memberOf ExceptionService
     */
    clearValidation(model: any) {
        for (let prop in model) {
            if (model.hasOwnProperty(prop)) {
                if (prop.indexOf("_") >= 0) {
                    model[prop] = "";
                }
            }
        }
    }

    /**
     * Clear notifications
     *
     * @param {*} model
     * @param {Array<string>} notifFields
     *
     * @memberOf MixinService
     */
    clearNotification(model: any, notifFields: Array<string>) {
        for (let prop in notifFields) {
            if (model.hasOwnProperty(notifFields[prop])) {
                model[notifFields[prop]] = "";
            }
        }
    }

    /**
     * Selected Class fo sorting
     *
     * @param {string} columnName
     * @param {*} sorting
     * @returns {*}
     *
     * @memberOf MixinService
     */
    selectedClass(columnName: string, sorting: any): any {
        if (columnName !== "") {
            return columnName === sorting.column ? "sort-" + sorting.descending : false;
        }
        return "no-sort-th";
    }

    /**
     * Convert Sorting
     *
     * @param {*} sorting
     * @returns {string}
     *
     * @memberOf MixinService
     */
    convertSorting(sorting: any): any {
        return sorting.descending ? ["-" + sorting.column] : [sorting.column];
    }
}

