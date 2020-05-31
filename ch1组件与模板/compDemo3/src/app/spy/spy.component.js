var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SpyComponent = (function () {
    function SpyComponent() {
        this.newName = 'Herbie';
        this.heroes = ['Windstorm', 'Magneta'];
    }
    SpyComponent.prototype.addHero = function () {
        if (this.newName.trim()) {
            this.heroes.push(this.newName.trim());
            this.newName = '';
        }
    };
    SpyComponent.prototype.removeHero = function (hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
        //this.logger.tick();
    };
    SpyComponent.prototype.reset = function () {
        //this.logger.log('-- reset --');
        this.heroes = [];
        //this.logger.tick();
    };
    SpyComponent.prototype.ngOnInit = function () {
    };
    SpyComponent = __decorate([
        core_1.Component({
            selector: 'app-spy',
            templateUrl: './spy.component.html',
            styleUrls: ['./spy.component.css']
        })
    ], SpyComponent);
    return SpyComponent;
})();
exports.SpyComponent = SpyComponent;
//# sourceMappingURL=spy.component.js.map