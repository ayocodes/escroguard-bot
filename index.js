"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const menu_1 = require("@grammyjs/menu");
// Create a bot.
const bot = new grammy_1.Bot("6718845274:AAHmLDgK2Ef3zYWH3DAqlvSN9QLG7pbDYk8");
// Create a simple menu.
const menu = new menu_1.Menu("root-menu")
    .text("Welcome", (ctx) => ctx.reply("Hi!"))
    .row()
    .submenu("Credits", "credits-menu");
const settings = new menu_1.Menu("credits-menu")
    .text("Show Credits", (ctx) => ctx.reply("Powered by grammY"))
    .back("Go Back");
menu.register(settings);
// Make it interactive.
bot.use(menu);
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // Send the menu.
    yield ctx.reply("Escroguard bot features \n click on one of the buttons!", {
        reply_markup: menu,
    });
}));
bot.start();
