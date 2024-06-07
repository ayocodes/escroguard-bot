import { Bot } from "grammy";
import { Menu } from "@grammyjs/menu";

// Create a bot.
const bot = new Bot("6718845274:AAHmLDgK2Ef3zYWH3DAqlvSN9QLG7pbDYk8");

// Create a simple menu.
const menu = new Menu("root-menu")
  .text("Welcome", (ctx) => ctx.reply("Hi!"))
  .row()
  .submenu("Credits", "credits-menu");

const settings = new Menu("credits-menu")
  .text("Show Credits", (ctx) => ctx.reply("Powered by grammY"))
  .back("Go Back");

menu.register(settings);

// Make it interactive.
bot.use(menu);

bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("Escroguard bot features \nclick on one of the buttons!", {
    reply_markup: menu,
  });
});

bot.start();
