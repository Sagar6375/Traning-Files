let app=new PIXI.Application({
    widh:800,
    height:700,
    backgroundColor:0x938111
});
document.body.appendChild(app.view);
player=new PIXI.Sprite.from("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrcayxm7EZrNIkPciDCwVan0AnBMiWtxVwQ&usqp=CAU");
player.anchor.set(0.5);
player.x= app.view.widh/2;
player.y= app.view.height/2;
app.stage.addChild(player);

