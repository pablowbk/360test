// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: Polaris-square-blanco-alumine.ggsk
// Generated jue 11. ago 11:32:30 2016

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=false;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 17px;';
		hs+='top:  378px;';
		hs+='width: 683px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='background: #9f9f9f;';
		hs+='border: 1px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this.divSkin.appendChild(this._rectangle_1);
		this._map_text=document.createElement('div');
		this._map_text__text=document.createElement('div');
		this._map_text.className='ggskin ggskin_textdiv';
		this._map_text.ggTextDiv=this._map_text__text;
		this._map_text.ggId="map_text";
		this._map_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_text.ggVisible=false;
		this._map_text.className='ggskin ggskin_text';
		this._map_text.ggType='text';
		this._map_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-237 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -237px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._map_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._map_text__text.setAttribute('style',hs);
		this._map_text.ggTextDiv.innerHTML="Mapa";
		this._map_text.appendChild(this._map_text__text);
		this.divSkin.appendChild(this._map_text);
		this._music_text=document.createElement('div');
		this._music_text__text=document.createElement('div');
		this._music_text.className='ggskin ggskin_textdiv';
		this._music_text.ggTextDiv=this._music_text__text;
		this._music_text.ggId="music_text";
		this._music_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music_text.ggVisible=false;
		this._music_text.className='ggskin ggskin_text';
		this._music_text.ggType='text';
		this._music_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(38 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._music_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._music_text__text.setAttribute('style',hs);
		this._music_text.ggTextDiv.innerHTML="Sonido On\/Off";
		this._music_text.appendChild(this._music_text__text);
		this.divSkin.appendChild(this._music_text);
		this._fullscreen_text=document.createElement('div');
		this._fullscreen_text__text=document.createElement('div');
		this._fullscreen_text.className='ggskin ggskin_textdiv';
		this._fullscreen_text.ggTextDiv=this._fullscreen_text__text;
		this._fullscreen_text.ggId="fullscreen_text";
		this._fullscreen_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_text.ggVisible=false;
		this._fullscreen_text.className='ggskin ggskin_text';
		this._fullscreen_text.ggType='text';
		this._fullscreen_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(98 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 98px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._fullscreen_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._fullscreen_text__text.setAttribute('style',hs);
		this._fullscreen_text.ggTextDiv.innerHTML="Pantalla Completa";
		this._fullscreen_text.appendChild(this._fullscreen_text__text);
		this.divSkin.appendChild(this._fullscreen_text);
		this._about_text=document.createElement('div');
		this._about_text__text=document.createElement('div');
		this._about_text.className='ggskin ggskin_textdiv';
		this._about_text.ggTextDiv=this._about_text__text;
		this._about_text.ggId="about_text";
		this._about_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about_text.ggVisible=false;
		this._about_text.className='ggskin ggskin_text';
		this._about_text.ggType='text';
		this._about_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-17 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -17px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._about_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._about_text__text.setAttribute('style',hs);
		this._about_text.ggTextDiv.innerHTML="Segu\xednos!";
		this._about_text.appendChild(this._about_text__text);
		this.divSkin.appendChild(this._about_text);
		this._zoomout_text=document.createElement('div');
		this._zoomout_text__text=document.createElement('div');
		this._zoomout_text.className='ggskin ggskin_textdiv';
		this._zoomout_text.ggTextDiv=this._zoomout_text__text;
		this._zoomout_text.ggId="zoomout_text";
		this._zoomout_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout_text.ggVisible=false;
		this._zoomout_text.className='ggskin ggskin_text';
		this._zoomout_text.ggType='text';
		this._zoomout_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-134 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -134px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._zoomout_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._zoomout_text__text.setAttribute('style',hs);
		this._zoomout_text.ggTextDiv.innerHTML="Alejar";
		this._zoomout_text.appendChild(this._zoomout_text__text);
		this.divSkin.appendChild(this._zoomout_text);
		this._zoomin_text=document.createElement('div');
		this._zoomin_text__text=document.createElement('div');
		this._zoomin_text.className='ggskin ggskin_textdiv';
		this._zoomin_text.ggTextDiv=this._zoomin_text__text;
		this._zoomin_text.ggId="zoomin_text";
		this._zoomin_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin_text.ggVisible=false;
		this._zoomin_text.className='ggskin ggskin_text';
		this._zoomin_text.ggType='text';
		this._zoomin_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-183 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -183px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._zoomin_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._zoomin_text__text.setAttribute('style',hs);
		this._zoomin_text.ggTextDiv.innerHTML="Acercar";
		this._zoomin_text.appendChild(this._zoomin_text__text);
		this.divSkin.appendChild(this._zoomin_text);
		this._menusm_text=document.createElement('div');
		this._menusm_text__text=document.createElement('div');
		this._menusm_text.className='ggskin ggskin_textdiv';
		this._menusm_text.ggTextDiv=this._menusm_text__text;
		this._menusm_text.ggId="menusm_text";
		this._menusm_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menusm_text.ggVisible=false;
		this._menusm_text.className='ggskin ggskin_text';
		this._menusm_text.ggType='text';
		this._menusm_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-72 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -72px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._menusm_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._menusm_text__text.setAttribute('style',hs);
		this._menusm_text.ggTextDiv.innerHTML="Ocultar Men\xfa";
		this._menusm_text.appendChild(this._menusm_text__text);
		this.divSkin.appendChild(this._menusm_text);
		this._menu_text=document.createElement('div');
		this._menu_text__text=document.createElement('div');
		this._menu_text.className='ggskin ggskin_textdiv';
		this._menu_text.ggTextDiv=this._menu_text__text;
		this._menu_text.ggId="menu_text";
		this._menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_text.ggVisible=false;
		this._menu_text.className='ggskin ggskin_text';
		this._menu_text.ggType='text';
		this._menu_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-72 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-83 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -72px;';
		hs+='top:  -83px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._menu_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 139px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._menu_text__text.setAttribute('style',hs);
		this._menu_text.ggTextDiv.innerHTML="Mostrar Men\xfa";
		this._menu_text.appendChild(this._menu_text__text);
		this.divSkin.appendChild(this._menu_text);
		this._menu=document.createElement('div');
		this._menu.ggId="menu";
		this._menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu.ggVisible=false;
		this._menu.className='ggskin ggskin_svg';
		this._menu.ggType='svg';
		this._menu.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-22 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-55 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -22px;';
		hs+='top:  -55px;';
		hs+='width: 45px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._menu.setAttribute('style',hs);
		this._menu__img=document.createElement('img');
		this._menu__img.className='ggskin ggskin_svg';
		this._menu__img.setAttribute('src',basePath + 'images/menu.svg');
		this._menu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 45px;height: 45px;-webkit-user-drag:none;');
		this._menu__img['ondragstart']=function() { return false; };
		this._menu.appendChild(this._menu__img);
		this._menu.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._container_1.style[domTransition]='none';
			} else {
				me._container_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_1.ggParameter.rx=0;me._container_1.ggParameter.ry=-60;
			me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
			if (me.player.transitionsDisabled) {
				me._toggle_gyro.style[domTransition]='none';
			} else {
				me._toggle_gyro.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toggle_gyro.ggParameter.rx=0;me._toggle_gyro.ggParameter.ry=60;
			me._toggle_gyro.style[domTransform]=parameterToTransform(me._toggle_gyro.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._menu.ggParameter.rx=0;me._menu.ggParameter.ry=60;
			me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu_sm.style[domTransition]='none';
			} else {
				me._menu_sm.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_sm.style.opacity='1';
			me._menu_sm.style.visibility=me._menu_sm.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu.style.opacity='0';
			me._menu.style.visibility='hidden';
		}
		this._menu.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu.ggParameter.sx=1.05;me._menu.ggParameter.sy=1.05;
			me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
			me._menu_text.style[domTransition]='none';
			me._menu_text.style.visibility='inherit';
			me._menu_text.ggVisible=true;
		}
		this._menu.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu.ggParameter.sx=1;me._menu.ggParameter.sy=1;
			me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
			me._menu_text.style[domTransition]='none';
			me._menu_text.style.visibility='hidden';
			me._menu_text.ggVisible=false;
		}
		this.divSkin.appendChild(this._menu);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		this._container_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-319 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(2 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -319px;';
		hs+='top:  2px;';
		hs+='width: 638px;';
		hs+='height: 61px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._container_1.setAttribute('style',hs);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 436px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.enterFullscreen();
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._exitfullscreen.style[domTransition]='none';
			me._exitfullscreen.style.visibility='inherit';
			me._exitfullscreen.ggVisible=true;
		}
		this._fullscreen.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.sx=1.05;me._fullscreen.ggParameter.sy=1.05;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility='inherit';
			me._fullscreen_text.ggVisible=true;
		}
		this._fullscreen.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.sx=1;me._fullscreen.ggParameter.sy=1;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility='hidden';
			me._fullscreen_text.ggVisible=false;
		}
		this._container_1.appendChild(this._fullscreen);
		this._exitfullscreen=document.createElement('div');
		this._exitfullscreen.ggId="exitfullscreen";
		this._exitfullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._exitfullscreen.ggVisible=false;
		this._exitfullscreen.className='ggskin ggskin_svg';
		this._exitfullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 436px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._exitfullscreen.setAttribute('style',hs);
		this._exitfullscreen__img=document.createElement('img');
		this._exitfullscreen__img.className='ggskin ggskin_svg';
		this._exitfullscreen__img.setAttribute('src',basePath + 'images/exitfullscreen.svg');
		this._exitfullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._exitfullscreen__img['ondragstart']=function() { return false; };
		this._exitfullscreen.appendChild(this._exitfullscreen__img);
		this._exitfullscreen.onclick=function () {
			me.player.exitFullscreen();
			me._exitfullscreen.style[domTransition]='none';
			me._exitfullscreen.style.visibility='hidden';
			me._exitfullscreen.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='inherit';
			me._fullscreen.ggVisible=true;
		}
		this._exitfullscreen.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._exitfullscreen.style[domTransition]='none';
			} else {
				me._exitfullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._exitfullscreen.ggParameter.sx=1.05;me._exitfullscreen.ggParameter.sy=1.05;
			me._exitfullscreen.style[domTransform]=parameterToTransform(me._exitfullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility='inherit';
			me._fullscreen_text.ggVisible=true;
		}
		this._exitfullscreen.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._exitfullscreen.style[domTransition]='none';
			} else {
				me._exitfullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._exitfullscreen.ggParameter.sx=1;me._exitfullscreen.ggParameter.sy=1;
			me._exitfullscreen.style[domTransform]=parameterToTransform(me._exitfullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility='hidden';
			me._fullscreen_text.ggVisible=false;
		}
		this._container_1.appendChild(this._exitfullscreen);
		this._sonido_on=document.createElement('div');
		this._sonido_on.ggId="sonido_on";
		this._sonido_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sonido_on.ggVisible=false;
		this._sonido_on.className='ggskin ggskin_svg';
		this._sonido_on.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 391px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._sonido_on.setAttribute('style',hs);
		this._sonido_on__img=document.createElement('img');
		this._sonido_on__img.className='ggskin ggskin_svg';
		this._sonido_on__img.setAttribute('src',basePath + 'images/sonido_on.svg');
		this._sonido_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._sonido_on__img['ondragstart']=function() { return false; };
		this._sonido_on.appendChild(this._sonido_on__img);
		this._sonido_on.onclick=function () {
			me._sonido_on.style[domTransition]='none';
			me._sonido_on.style.visibility='hidden';
			me._sonido_on.ggVisible=false;
			me._sonido_off.style[domTransition]='none';
			me._sonido_off.style.visibility='inherit';
			me._sonido_off.ggVisible=true;
			me.player.setVolume("_background",8);
		}
		this._sonido_on.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._sonido_on.style[domTransition]='none';
			} else {
				me._sonido_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_on.ggParameter.sx=1.05;me._sonido_on.ggParameter.sy=1.05;
			me._sonido_on.style[domTransform]=parameterToTransform(me._sonido_on.ggParameter);
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility='inherit';
			me._music_text.ggVisible=true;
		}
		this._sonido_on.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._sonido_on.style[domTransition]='none';
			} else {
				me._sonido_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_on.ggParameter.sx=1;me._sonido_on.ggParameter.sy=1;
			me._sonido_on.style[domTransform]=parameterToTransform(me._sonido_on.ggParameter);
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility='hidden';
			me._music_text.ggVisible=false;
		}
		this._container_1.appendChild(this._sonido_on);
		this._sonido_off=document.createElement('div');
		this._sonido_off.ggId="sonido_off";
		this._sonido_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sonido_off.ggVisible=true;
		this._sonido_off.className='ggskin ggskin_svg';
		this._sonido_off.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 392px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._sonido_off.setAttribute('style',hs);
		this._sonido_off__img=document.createElement('img');
		this._sonido_off__img.className='ggskin ggskin_svg';
		this._sonido_off__img.setAttribute('src',basePath + 'images/sonido_off.svg');
		this._sonido_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._sonido_off__img['ondragstart']=function() { return false; };
		this._sonido_off.appendChild(this._sonido_off__img);
		this._sonido_off.onclick=function () {
			me._sonido_off.style[domTransition]='none';
			me._sonido_off.style.visibility='hidden';
			me._sonido_off.ggVisible=false;
			me._sonido_on.style[domTransition]='none';
			me._sonido_on.style.visibility='inherit';
			me._sonido_on.ggVisible=true;
			me.player.setVolume("_background",0);
		}
		this._sonido_off.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._sonido_off.style[domTransition]='none';
			} else {
				me._sonido_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_off.ggParameter.sx=1.05;me._sonido_off.ggParameter.sy=1.05;
			me._sonido_off.style[domTransform]=parameterToTransform(me._sonido_off.ggParameter);
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility='inherit';
			me._music_text.ggVisible=true;
		}
		this._sonido_off.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._sonido_off.style[domTransition]='none';
			} else {
				me._sonido_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_off.ggParameter.sx=1;me._sonido_off.ggParameter.sy=1;
			me._sonido_off.style[domTransform]=parameterToTransform(me._sonido_off.ggParameter);
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility='hidden';
			me._music_text.ggVisible=false;
		}
		this._container_1.appendChild(this._sonido_off);
		this._about=document.createElement('div');
		this._about.ggId="about";
		this._about.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about.ggVisible=true;
		this._about.className='ggskin ggskin_svg';
		this._about.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 345px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._about.setAttribute('style',hs);
		this._about__img=document.createElement('img');
		this._about__img.className='ggskin ggskin_svg';
		this._about__img.setAttribute('src',basePath + 'images/about.svg');
		this._about__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._about__img['ondragstart']=function() { return false; };
		this._about.appendChild(this._about__img);
		this._about.onclick=function () {
			me.player.openUrl("https:\/\/www.facebook.com\/Espacio-Alumin%C3%A9-993292694071630\/","_blank");
		}
		this._about.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._about.style[domTransition]='none';
			} else {
				me._about.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._about.ggParameter.sx=1.05;me._about.ggParameter.sy=1.05;
			me._about.style[domTransform]=parameterToTransform(me._about.ggParameter);
			me._about_text.style[domTransition]='none';
			me._about_text.style.visibility='inherit';
			me._about_text.ggVisible=true;
		}
		this._about.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._about.style[domTransition]='none';
			} else {
				me._about.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._about.ggParameter.sx=1;me._about.ggParameter.sy=1;
			me._about.style[domTransform]=parameterToTransform(me._about.ggParameter);
			me._about_text.style[domTransition]='none';
			me._about_text.style.visibility='hidden';
			me._about_text.ggVisible=false;
		}
		this._container_1.appendChild(this._about);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 254px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._zoomout.style[domTransition]='none';
			} else {
				me._zoomout.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomout.ggParameter.sx=1.05;me._zoomout.ggParameter.sy=1.05;
			me._zoomout.style[domTransform]=parameterToTransform(me._zoomout.ggParameter);
			me._zoomout_text.style[domTransition]='none';
			me._zoomout_text.style.visibility='inherit';
			me._zoomout_text.ggVisible=true;
		}
		this._zoomout.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._zoomout.style[domTransition]='none';
			} else {
				me._zoomout.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomout.ggParameter.sx=1;me._zoomout.ggParameter.sy=1;
			me._zoomout.style[domTransform]=parameterToTransform(me._zoomout.ggParameter);
			me._zoomout_text.style[domTransition]='none';
			me._zoomout_text.style.visibility='hidden';
			me._zoomout_text.ggVisible=false;
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._container_1.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 212px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._zoomin.style[domTransition]='none';
			} else {
				me._zoomin.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomin.ggParameter.sx=1.05;me._zoomin.ggParameter.sy=1.05;
			me._zoomin.style[domTransform]=parameterToTransform(me._zoomin.ggParameter);
			me._zoomin_text.style[domTransition]='none';
			me._zoomin_text.style.visibility='inherit';
			me._zoomin_text.ggVisible=true;
		}
		this._zoomin.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._zoomin.style[domTransition]='none';
			} else {
				me._zoomin.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomin.ggParameter.sx=1;me._zoomin.ggParameter.sy=1;
			me._zoomin.style[domTransform]=parameterToTransform(me._zoomin.ggParameter);
			me._zoomin_text.style[domTransition]='none';
			me._zoomin_text.style.visibility='hidden';
			me._zoomin_text.ggVisible=false;
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._container_1.appendChild(this._zoomin);
		this._map=document.createElement('div');
		this._map.ggId="map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_svg';
		this._map.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 165px;';
		hs+='top:  -1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._map.setAttribute('style',hs);
		this._map__img=document.createElement('img');
		this._map__img.className='ggskin ggskin_svg';
		this._map__img.setAttribute('src',basePath + 'images/map.svg');
		this._map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._map__img['ondragstart']=function() { return false; };
		this._map.appendChild(this._map__img);
		this._map.onclick=function () {
			flag=me._mapa.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._mapa.style[domTransition]='none';
			} else {
				me._mapa.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._mapa.ggParameter.rx=0;me._mapa.ggParameter.ry=0;
				me._mapa.style[domTransform]=parameterToTransform(me._mapa.ggParameter);
			} else {
				me._mapa.ggParameter.rx=310;me._mapa.ggParameter.ry=0;
				me._mapa.style[domTransform]=parameterToTransform(me._mapa.ggParameter);
			}
			me._mapa.ggPositonActive=!flag;
		}
		this._map.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.ggParameter.sx=1.05;me._map.ggParameter.sy=1.05;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			me._map_text.style[domTransition]='none';
			me._map_text.style.visibility='inherit';
			me._map_text.ggVisible=true;
		}
		this._map.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.ggParameter.sx=1;me._map.ggParameter.sy=1;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			me._map_text.style[domTransition]='none';
			me._map_text.style.visibility='hidden';
			me._map_text.ggVisible=false;
		}
		this._container_1.appendChild(this._map);
		this._menu_sm=document.createElement('div');
		this._menu_sm.ggId="menu_sm";
		this._menu_sm.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_sm.ggVisible=true;
		this._menu_sm.className='ggskin ggskin_svg';
		this._menu_sm.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 303px;';
		hs+='top:  1px;';
		hs+='width: 36px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._menu_sm.setAttribute('style',hs);
		this._menu_sm__img=document.createElement('img');
		this._menu_sm__img.className='ggskin ggskin_svg';
		this._menu_sm__img.setAttribute('src',basePath + 'images/menu_sm.svg');
		this._menu_sm__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 36px;height: 36px;-webkit-user-drag:none;');
		this._menu_sm__img['ondragstart']=function() { return false; };
		this._menu_sm.appendChild(this._menu_sm__img);
		this._menu_sm.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._container_1.style[domTransition]='none';
			} else {
				me._container_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_1.ggParameter.rx=0;me._container_1.ggParameter.ry=0;
			me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
			if (me.player.transitionsDisabled) {
				me._toggle_gyro.style[domTransition]='none';
			} else {
				me._toggle_gyro.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toggle_gyro.ggParameter.rx=0;me._toggle_gyro.ggParameter.ry=0;
			me._toggle_gyro.style[domTransform]=parameterToTransform(me._toggle_gyro.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._menu.ggParameter.rx=0;me._menu.ggParameter.ry=0;
			me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu.style.opacity='1';
			me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._menu_sm.style[domTransition]='none';
			} else {
				me._menu_sm.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_sm.style.opacity='0';
			me._menu_sm.style.visibility='hidden';
		}
		this._menu_sm.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._menu_sm.style[domTransition]='none';
			} else {
				me._menu_sm.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_sm.ggParameter.sx=1.05;me._menu_sm.ggParameter.sy=1.05;
			me._menu_sm.style[domTransform]=parameterToTransform(me._menu_sm.ggParameter);
			me._menusm_text.style[domTransition]='none';
			me._menusm_text.style.visibility='inherit';
			me._menusm_text.ggVisible=true;
		}
		this._menu_sm.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._menu_sm.style[domTransition]='none';
			} else {
				me._menu_sm.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_sm.ggParameter.sx=1;me._menu_sm.ggParameter.sy=1;
			me._menu_sm.style[domTransform]=parameterToTransform(me._menu_sm.ggParameter);
			me._menusm_text.style[domTransition]='none';
			me._menusm_text.style.visibility='hidden';
			me._menusm_text.ggVisible=false;
		}
		this._container_1.appendChild(this._menu_sm);
		this.divSkin.appendChild(this._container_1);
		this._mapa=document.createElement('div');
		this._mapa.ggId="mapa";
		this._mapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapa.ggVisible=true;
		this._mapa.className='ggskin ggskin_rectangle';
		this._mapa.ggType='rectangle';
		this._mapa.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-243 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -310px;';
		hs+='top:  -243px;';
		hs+='width: 215px;';
		hs+='height: 467px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.9;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._mapa.setAttribute('style',hs);
		this._cerrarmapa=document.createElement('div');
		this._cerrarmapa.ggId="cerrar-mapa";
		this._cerrarmapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cerrarmapa.ggVisible=true;
		this._cerrarmapa.className='ggskin ggskin_svg';
		this._cerrarmapa.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 266px;';
		hs+='top:  -17px;';
		hs+='width: 59px;';
		hs+='height: 59px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._cerrarmapa.setAttribute('style',hs);
		this._cerrarmapa__img=document.createElement('img');
		this._cerrarmapa__img.className='ggskin ggskin_svg';
		this._cerrarmapa__img.setAttribute('src',basePath + 'images/cerrarmapa.svg');
		this._cerrarmapa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 59px;height: 59px;-webkit-user-drag:none;');
		this._cerrarmapa__img['ondragstart']=function() { return false; };
		this._cerrarmapa.appendChild(this._cerrarmapa__img);
		this._cerrarmapa.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapa.style[domTransition]='none';
			} else {
				me._mapa.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._mapa.ggParameter.rx=0;me._mapa.ggParameter.ry=0;
			me._mapa.style[domTransform]=parameterToTransform(me._mapa.ggParameter);
		}
		this._cerrarmapa.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._cerrarmapa.style[domTransition]='none';
			} else {
				me._cerrarmapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cerrarmapa.ggParameter.sx=1.05;me._cerrarmapa.ggParameter.sy=1.05;
			me._cerrarmapa.style[domTransform]=parameterToTransform(me._cerrarmapa.ggParameter);
		}
		this._cerrarmapa.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._cerrarmapa.style[domTransition]='none';
			} else {
				me._cerrarmapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cerrarmapa.ggParameter.sx=1;me._cerrarmapa.ggParameter.sy=1;
			me._cerrarmapa.style[domTransform]=parameterToTransform(me._cerrarmapa.ggParameter);
		}
		this._mapa.appendChild(this._cerrarmapa);
		this._textomapa=document.createElement('div');
		this._textomapa__text=document.createElement('div');
		this._textomapa.className='ggskin ggskin_textdiv';
		this._textomapa.ggTextDiv=this._textomapa__text;
		this._textomapa.ggId="texto-mapa";
		this._textomapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._textomapa.ggVisible=true;
		this._textomapa.className='ggskin ggskin_text';
		this._textomapa.ggType='text';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  5px;';
		hs+='width: 263px;';
		hs+='height: 480px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._textomapa.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 263px;';
		hs+='height: 480px;';
		hs+='background: #ffffff;';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._textomapa__text.setAttribute('style',hs);
		this._textomapa.ggTextDiv.innerHTML="<div id=\"mapdiv\" style=\"width:270px; height:480px\">map goes here!<\/div>";
		this._textomapa.appendChild(this._textomapa__text);
		this._textomapa.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._textomapa.style[domTransition]='none';
			} else {
				me._textomapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._textomapa.style.opacity='1';
			me._textomapa.style.visibility=me._textomapa.ggVisible?'inherit':'hidden';
		}
		this._textomapa.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._textomapa.style[domTransition]='none';
			} else {
				me._textomapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._textomapa.style.opacity='0.8';
			me._textomapa.style.visibility=me._textomapa.ggVisible?'inherit':'hidden';
		}
		this._mapa.appendChild(this._textomapa);
		this.divSkin.appendChild(this._mapa);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-55 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -55px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  40px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._toggle_gyro=document.createElement('div');
		this._toggle_gyro.ggId="toggle_gyro";
		this._toggle_gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggle_gyro.ggVisible=true;
		this._toggle_gyro.className='ggskin ggskin_container';
		this._toggle_gyro.ggType='container';
		this._toggle_gyro.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-31 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -31px;';
		hs+='top:  11px;';
		hs+='width: 49px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._toggle_gyro.setAttribute('style',hs);
		this._gyro_off=document.createElement('div');
		this._gyro_off.ggId="gyro_off";
		this._gyro_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_off.ggVisible=false;
		this._gyro_off.className='ggskin ggskin_svg';
		this._gyro_off.ggType='svg';
		this._gyro_off.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-16 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -59px;';
		hs+='width: 45px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._gyro_off.setAttribute('style',hs);
		this._gyro_off__img=document.createElement('img');
		this._gyro_off__img.className='ggskin ggskin_svg';
		this._gyro_off__img.setAttribute('src',basePath + 'images/gyro_off.svg');
		this._gyro_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 45px;height: 45px;-webkit-user-drag:none;');
		this._gyro_off__img['ondragstart']=function() { return false; };
		this._gyro_off.appendChild(this._gyro_off__img);
		this._gyro_off.onclick=function () {
			gyro.disable();
			me._gyro_on.style[domTransition]='none';
			me._gyro_on.style.visibility='inherit';
			me._gyro_on.ggVisible=true;
			me._gyro_off.style[domTransition]='none';
			me._gyro_off.style.visibility='hidden';
			me._gyro_off.ggVisible=false;
		}
		this._gyro_off.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.ggParameter.sx=1.05;me._gyro_off.ggParameter.sy=1.05;
			me._gyro_off.style[domTransform]=parameterToTransform(me._gyro_off.ggParameter);
			me._gyrooff_text.style[domTransition]='none';
			me._gyrooff_text.style.visibility='inherit';
			me._gyrooff_text.ggVisible=true;
		}
		this._gyro_off.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.ggParameter.sx=1;me._gyro_off.ggParameter.sy=1;
			me._gyro_off.style[domTransform]=parameterToTransform(me._gyro_off.ggParameter);
			me._gyrooff_text.style[domTransition]='none';
			me._gyrooff_text.style.visibility='hidden';
			me._gyrooff_text.ggVisible=false;
		}
		this._toggle_gyro.appendChild(this._gyro_off);
		this._gyro_on=document.createElement('div');
		this._gyro_on.ggId="gyro_on";
		this._gyro_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_on.ggVisible=true;
		this._gyro_on.className='ggskin ggskin_svg';
		this._gyro_on.ggType='svg';
		this._gyro_on.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-16 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -59px;';
		hs+='width: 45px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gyro_on.setAttribute('style',hs);
		this._gyro_on__img=document.createElement('img');
		this._gyro_on__img.className='ggskin ggskin_svg';
		this._gyro_on__img.setAttribute('src',basePath + 'images/gyro_on.svg');
		this._gyro_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 45px;height: 45px;-webkit-user-drag:none;');
		this._gyro_on__img['ondragstart']=function() { return false; };
		this._gyro_on.appendChild(this._gyro_on__img);
		this._gyro_on.onclick=function () {
			gyro.enable();
			me._gyro_on.style[domTransition]='none';
			me._gyro_on.style.visibility='hidden';
			me._gyro_on.ggVisible=false;
			me._gyro_off.style[domTransition]='none';
			me._gyro_off.style.visibility='inherit';
			me._gyro_off.ggVisible=true;
		}
		this._gyro_on.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.ggParameter.sx=1.05;me._gyro_on.ggParameter.sy=1.05;
			me._gyro_on.style[domTransform]=parameterToTransform(me._gyro_on.ggParameter);
			me._gyro_text.style[domTransition]='none';
			me._gyro_text.style.visibility='inherit';
			me._gyro_text.ggVisible=true;
		}
		this._gyro_on.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.ggParameter.sx=1;me._gyro_on.ggParameter.sy=1;
			me._gyro_on.style[domTransform]=parameterToTransform(me._gyro_on.ggParameter);
			me._gyro_text.style[domTransition]='none';
			me._gyro_text.style.visibility='hidden';
			me._gyro_text.ggVisible=false;
		}
		this._toggle_gyro.appendChild(this._gyro_on);
		this._gyrooff_text=document.createElement('div');
		this._gyrooff_text__text=document.createElement('div');
		this._gyrooff_text.className='ggskin ggskin_textdiv';
		this._gyrooff_text.ggTextDiv=this._gyrooff_text__text;
		this._gyrooff_text.ggId="gyrooff_text";
		this._gyrooff_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyrooff_text.ggVisible=false;
		this._gyrooff_text.className='ggskin ggskin_text';
		this._gyrooff_text.ggType='text';
		this._gyrooff_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-136 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-35 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -136px;';
		hs+='top:  -35px;';
		hs+='width: 279px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._gyrooff_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 279px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._gyrooff_text__text.setAttribute('style',hs);
		this._gyrooff_text.ggTextDiv.innerHTML="Control Manual";
		this._gyrooff_text.appendChild(this._gyrooff_text__text);
		this._toggle_gyro.appendChild(this._gyrooff_text);
		this._gyro_text=document.createElement('div');
		this._gyro_text__text=document.createElement('div');
		this._gyro_text.className='ggskin ggskin_textdiv';
		this._gyro_text.ggTextDiv=this._gyro_text__text;
		this._gyro_text.ggId="gyro_text";
		this._gyro_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_text.ggVisible=false;
		this._gyro_text.className='ggskin ggskin_text';
		this._gyro_text.ggType='text';
		this._gyro_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-136 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-35 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -136px;';
		hs+='top:  -35px;';
		hs+='width: 279px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._gyro_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 279px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._gyro_text__text.setAttribute('style',hs);
		this._gyro_text.ggTextDiv.innerHTML="Activar Giroscopio";
		this._gyro_text.appendChild(this._gyro_text__text);
		this._toggle_gyro.appendChild(this._gyro_text);
		this.divSkin.appendChild(this._toggle_gyro);
		this._splash=document.createElement('div');
		this._splash.ggId="splash";
		this._splash.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._splash.ggVisible=true;
		this._splash.className='ggskin ggskin_image';
		this._splash.ggType='image';
		this._splash.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-239 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -239px;';
		hs+='width: 320px;';
		hs+='height: 479px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._splash.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._splash.setAttribute('style',hs);
		this._splash__img=document.createElement('img');
		this._splash__img.className='ggskin ggskin_image';
		this._splash__img.setAttribute('src',basePath + 'images/splash.png');
		this._splash__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._splash__img.className='ggskin ggskin_image';
		this._splash__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._splash__img);
		this._splash.appendChild(this._splash__img);
		this._splash.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._splash.style[domTransition]='none';
			} else {
				me._splash.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._splash.style.opacity='0';
			me._splash.style.visibility='hidden';
			me._menu.style[domTransition]='none';
			me._menu.style.visibility='inherit';
			me._menu.ggVisible=true;
		}
		this.divSkin.appendChild(this._splash);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
			gyro.disable();
			gyro.disable();
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-0.5,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 320px;';
			hs+='top:  85px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._enter_nextpano=document.createElement('div');
			this._enter_nextpano.ggId="enter_nextpano";
			this._enter_nextpano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._enter_nextpano.ggVisible=false;
			this._enter_nextpano.className='ggskin ggskin_svg';
			this._enter_nextpano.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -39px;';
			hs+='top:  -25px;';
			hs+='width: 65px;';
			hs+='height: 71px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this._enter_nextpano.setAttribute('style',hs);
			this._enter_nextpano__img=document.createElement('img');
			this._enter_nextpano__img.className='ggskin ggskin_svg';
			this._enter_nextpano__img.setAttribute('src',basePath + 'images/enter_nextpano.svg');
			this._enter_nextpano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 71px;-webkit-user-drag:none;');
			this._enter_nextpano__img['ondragstart']=function() { return false; };
			this._enter_nextpano.appendChild(this._enter_nextpano__img);
			this._enter_nextpano.onclick=function () {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
			}
			this._enter_nextpano.onmouseout=function () {
				me._next_pano.style[domTransition]='none';
				me._next_pano.style.visibility='inherit';
				me._next_pano.ggVisible=true;
				me._enter_nextpano.style[domTransition]='none';
				me._enter_nextpano.style.visibility='hidden';
				me._enter_nextpano.ggVisible=false;
			}
			this.__div.appendChild(this._enter_nextpano);
			this._next_pano=document.createElement('div');
			this._next_pano.ggId="next_pano";
			this._next_pano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._next_pano.ggVisible=true;
			this._next_pano.className='ggskin ggskin_svg';
			this._next_pano.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -34px;';
			hs+='top:  -25px;';
			hs+='width: 50px;';
			hs+='height: 62px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._next_pano.setAttribute('style',hs);
			this._next_pano__img=document.createElement('img');
			this._next_pano__img.className='ggskin ggskin_svg';
			this._next_pano__img.setAttribute('src',basePath + 'images/next_pano.svg');
			this._next_pano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 50px;height: 62px;-webkit-user-drag:none;');
			this._next_pano__img['ondragstart']=function() { return false; };
			this._next_pano.appendChild(this._next_pano__img);
			this._next_pano.onmouseover=function () {
				me._next_pano.style[domTransition]='none';
				me._next_pano.style.visibility='hidden';
				me._next_pano.ggVisible=false;
			}
			this._next_pano.onmouseout=function () {
				me._enter_nextpano.style[domTransition]='none';
				me._enter_nextpano.style.visibility='inherit';
				me._enter_nextpano.ggVisible=true;
			}
			this.__div.appendChild(this._next_pano);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};