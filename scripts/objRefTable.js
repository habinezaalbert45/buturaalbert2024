const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{graund: 0},
	{wall: 0},
	{"8Direction": 0},
	{player: 0},
	{Bullet: 0},
	{ball: 0},
	{Text: 0},
	{score: 0}
];

self.InstanceType = {
	graund: class extends self.ITiledBackgroundInstance {},
	wall: class extends self.ITiledBackgroundInstance {},
	player: class extends self.ISpriteInstance {},
	ball: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}