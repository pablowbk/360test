// Garden Gnome Software - Skin
// Pano2VR 6.0 beta/16757
// Filename: RLB--pano2vr-skin3.3.ggsk
// Generated Thu Apr 12 10:37:07 2018

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var hotspotTemplates=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
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
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._map_text=document.createElement('div');
		this._map_text__text=document.createElement('div');
		this._map_text.className='ggskin ggskin_textdiv';
		this._map_text.ggTextDiv=this._map_text__text;
		this._map_text.ggId="map_text";
		this._map_text.ggDx=-144.5;
		this._map_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_text.ggVisible=false;
		this._map_text.className="ggskin ggskin_text ";
		this._map_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._map_text.setAttribute('style',hs);
		this._map_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._map_text__text.setAttribute('style',hs);
		this._map_text__text.innerHTML="Mapa";
		this._map_text.appendChild(this._map_text__text);
		me._map_text.ggIsActive=function() {
			return false;
		}
		me._map_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._map_text);
		this._music_off=document.createElement('div');
		this._music_off__text=document.createElement('div');
		this._music_off.className='ggskin ggskin_textdiv';
		this._music_off.ggTextDiv=this._music_off__text;
		this._music_off.ggId="music_off";
		this._music_off.ggDx=95.5;
		this._music_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music_off.ggVisible=false;
		this._music_off.className="ggskin ggskin_text ";
		this._music_off.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._music_off.setAttribute('style',hs);
		this._music_off.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._music_off__text.setAttribute('style',hs);
		this._music_off__text.innerHTML="Apagar";
		this._music_off.appendChild(this._music_off__text);
		me._music_off.ggIsActive=function() {
			return false;
		}
		me._music_off.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._music_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._music_off);
		this._music_text=document.createElement('div');
		this._music_text__text=document.createElement('div');
		this._music_text.className='ggskin ggskin_textdiv';
		this._music_text.ggTextDiv=this._music_text__text;
		this._music_text.ggId="music_text";
		this._music_text.ggDx=95.5;
		this._music_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music_text.ggVisible=false;
		this._music_text.className="ggskin ggskin_text ";
		this._music_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._music_text.setAttribute('style',hs);
		this._music_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._music_text__text.setAttribute('style',hs);
		this._music_text__text.innerHTML="Radio Online!";
		this._music_text.appendChild(this._music_text__text);
		me._music_text.ggIsActive=function() {
			return false;
		}
		me._music_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._music_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._music_text);
		this._fullscreen_text=document.createElement('div');
		this._fullscreen_text__text=document.createElement('div');
		this._fullscreen_text.className='ggskin ggskin_textdiv';
		this._fullscreen_text.ggTextDiv=this._fullscreen_text__text;
		this._fullscreen_text.ggId="fullscreen_text";
		this._fullscreen_text.ggDx=145.5;
		this._fullscreen_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_text.ggVisible=false;
		this._fullscreen_text.className="ggskin ggskin_text ";
		this._fullscreen_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._fullscreen_text.setAttribute('style',hs);
		this._fullscreen_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._fullscreen_text__text.setAttribute('style',hs);
		this._fullscreen_text__text.innerHTML="Pantalla Completa";
		this._fullscreen_text.appendChild(this._fullscreen_text__text);
		me._fullscreen_text.ggIsActive=function() {
			return false;
		}
		me._fullscreen_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fullscreen_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._fullscreen_text);
		this._about_text=document.createElement('div');
		this._about_text__text=document.createElement('div');
		this._about_text.className='ggskin ggskin_textdiv';
		this._about_text.ggTextDiv=this._about_text__text;
		this._about_text.ggId="about_text";
		this._about_text.ggDx=37.5;
		this._about_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about_text.ggVisible=false;
		this._about_text.className="ggskin ggskin_text ";
		this._about_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._about_text.setAttribute('style',hs);
		this._about_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._about_text__text.setAttribute('style',hs);
		this._about_text__text.innerHTML="+ info";
		this._about_text.appendChild(this._about_text__text);
		me._about_text.ggIsActive=function() {
			return false;
		}
		me._about_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._about_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._about_text);
		this._zoomout_text=document.createElement('div');
		this._zoomout_text__text=document.createElement('div');
		this._zoomout_text.className='ggskin ggskin_textdiv';
		this._zoomout_text.ggTextDiv=this._zoomout_text__text;
		this._zoomout_text.ggId="zoomout_text";
		this._zoomout_text.ggDx=-56.5;
		this._zoomout_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout_text.ggVisible=false;
		this._zoomout_text.className="ggskin ggskin_text ";
		this._zoomout_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._zoomout_text.setAttribute('style',hs);
		this._zoomout_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._zoomout_text__text.setAttribute('style',hs);
		this._zoomout_text__text.innerHTML="Alejar";
		this._zoomout_text.appendChild(this._zoomout_text__text);
		me._zoomout_text.ggIsActive=function() {
			return false;
		}
		me._zoomout_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._zoomout_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._zoomout_text);
		this._zoomin_text=document.createElement('div');
		this._zoomin_text__text=document.createElement('div');
		this._zoomin_text.className='ggskin ggskin_textdiv';
		this._zoomin_text.ggTextDiv=this._zoomin_text__text;
		this._zoomin_text.ggId="zoomin_text";
		this._zoomin_text.ggDx=-103.5;
		this._zoomin_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin_text.ggVisible=false;
		this._zoomin_text.className="ggskin ggskin_text ";
		this._zoomin_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._zoomin_text.setAttribute('style',hs);
		this._zoomin_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._zoomin_text__text.setAttribute('style',hs);
		this._zoomin_text__text.innerHTML="Acercar";
		this._zoomin_text.appendChild(this._zoomin_text__text);
		me._zoomin_text.ggIsActive=function() {
			return false;
		}
		me._zoomin_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._zoomin_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._zoomin_text);
		this._menusm_text=document.createElement('div');
		this._menusm_text__text=document.createElement('div');
		this._menusm_text.className='ggskin ggskin_textdiv';
		this._menusm_text.ggTextDiv=this._menusm_text__text;
		this._menusm_text.ggId="menusm_text";
		this._menusm_text.ggDx=-1.5;
		this._menusm_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menusm_text.ggVisible=false;
		this._menusm_text.className="ggskin ggskin_text ";
		this._menusm_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._menusm_text.setAttribute('style',hs);
		this._menusm_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menusm_text__text.setAttribute('style',hs);
		this._menusm_text__text.innerHTML="Ocultar Men\xfa";
		this._menusm_text.appendChild(this._menusm_text__text);
		me._menusm_text.ggIsActive=function() {
			return false;
		}
		me._menusm_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._menusm_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._menusm_text);
		this._menu_text=document.createElement('div');
		this._menu_text__text=document.createElement('div');
		this._menu_text.className='ggskin ggskin_textdiv';
		this._menu_text.ggTextDiv=this._menu_text__text;
		this._menu_text.ggId="menu_text";
		this._menu_text.ggDx=-1.5;
		this._menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_text.ggVisible=false;
		this._menu_text.className="ggskin ggskin_text ";
		this._menu_text.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		this._menu_text.setAttribute('style',hs);
		this._menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menu_text__text.setAttribute('style',hs);
		this._menu_text__text.innerHTML="Mostrar Men\xfa";
		this._menu_text.appendChild(this._menu_text__text);
		me._menu_text.ggIsActive=function() {
			return false;
		}
		me._menu_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._menu_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._menu_text);
		this._menu=document.createElement('div');
		this._menu__img=document.createElement('img');
		this._menu__img.className='ggskin ggskin_svg';
		this._menu__img.setAttribute('src',basePath + 'images/menu.svg');
		this._menu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._menu__img['ondragstart']=function() { return false; };
		this._menu.appendChild(this._menu__img);
		this._menu.ggId="menu";
		this._menu.ggDx=-0.5;
		this._menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu.ggVisible=false;
		this._menu.className="ggskin ggskin_svg ";
		this._menu.ggType='svg';
		hs ='';
		hs+='bottom : 11px;';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._menu.setAttribute('style',hs);
		this._menu.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		me._menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._menu.onclick=function (e) {
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
		this._menu.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._menu.style[domTransition]='none';
			} else {
				me._menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu.ggParameter.sx=1.05;me._menu.ggParameter.sy=1.05;
			me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
			me._menu_text.style[domTransition]='none';
			me._menu_text.style.visibility=(Number(me._menu_text.style.opacity)>0||!me._menu_text.style.opacity)?'inherit':'hidden';
			me._menu_text.ggVisible=true;
		}
		this._menu.onmouseout=function (e) {
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
		this._menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._menu);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggDx=0;
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className="ggskin ggskin_container ";
		this._container_1.ggType='container';
		hs ='';
		hs+='bottom : -63px;';
		hs+='height : 61px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 638px;';
		hs+='pointer-events:none;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className="ggskin ggskin_svg ";
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 439px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.enterFullscreen();
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._exitfullscreen.style[domTransition]='none';
			me._exitfullscreen.style.visibility=(Number(me._exitfullscreen.style.opacity)>0||!me._exitfullscreen.style.opacity)?'inherit':'hidden';
			me._exitfullscreen.ggVisible=true;
		}
		this._fullscreen.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.sx=1.05;me._fullscreen.ggParameter.sy=1.05;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility=(Number(me._fullscreen_text.style.opacity)>0||!me._fullscreen_text.style.opacity)?'inherit':'hidden';
			me._fullscreen_text.ggVisible=true;
		}
		this._fullscreen.onmouseout=function (e) {
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
		this._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._fullscreen);
		this._exitfullscreen=document.createElement('div');
		this._exitfullscreen__img=document.createElement('img');
		this._exitfullscreen__img.className='ggskin ggskin_svg';
		this._exitfullscreen__img.setAttribute('src',basePath + 'images/exitfullscreen.svg');
		this._exitfullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._exitfullscreen__img['ondragstart']=function() { return false; };
		this._exitfullscreen.appendChild(this._exitfullscreen__img);
		this._exitfullscreen.ggId="exitfullscreen";
		this._exitfullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._exitfullscreen.ggVisible=false;
		this._exitfullscreen.className="ggskin ggskin_svg ";
		this._exitfullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 439px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._exitfullscreen.setAttribute('style',hs);
		this._exitfullscreen.style[domTransform + 'Origin']='50% 50%';
		me._exitfullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._exitfullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._exitfullscreen.onclick=function (e) {
			me.player.exitFullscreen();
			me._exitfullscreen.style[domTransition]='none';
			me._exitfullscreen.style.visibility='hidden';
			me._exitfullscreen.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
		}
		this._exitfullscreen.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._exitfullscreen.style[domTransition]='none';
			} else {
				me._exitfullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._exitfullscreen.ggParameter.sx=1.05;me._exitfullscreen.ggParameter.sy=1.05;
			me._exitfullscreen.style[domTransform]=parameterToTransform(me._exitfullscreen.ggParameter);
			me._fullscreen_text.style[domTransition]='none';
			me._fullscreen_text.style.visibility=(Number(me._fullscreen_text.style.opacity)>0||!me._fullscreen_text.style.opacity)?'inherit':'hidden';
			me._fullscreen_text.ggVisible=true;
		}
		this._exitfullscreen.onmouseout=function (e) {
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
		this._exitfullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._exitfullscreen);
		this._sonido_on=document.createElement('div');
		this._sonido_on__img=document.createElement('img');
		this._sonido_on__img.className='ggskin ggskin_svg';
		this._sonido_on__img.setAttribute('src',basePath + 'images/sonido_on.svg');
		this._sonido_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._sonido_on__img['ondragstart']=function() { return false; };
		this._sonido_on.appendChild(this._sonido_on__img);
		this._sonido_on.ggId="sonido_on";
		this._sonido_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sonido_on.ggVisible=true;
		this._sonido_on.className="ggskin ggskin_svg ";
		this._sonido_on.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 389px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._sonido_on.setAttribute('style',hs);
		this._sonido_on.style[domTransform + 'Origin']='50% 50%';
		me._sonido_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sonido_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sonido_on.onclick=function (e) {
			me._sonido_on.style[domTransition]='none';
			me._sonido_on.style.visibility='hidden';
			me._sonido_on.ggVisible=false;
			me._sonido_off.style[domTransition]='none';
			me._sonido_off.style.visibility=(Number(me._sonido_off.style.opacity)>0||!me._sonido_off.style.opacity)?'inherit':'hidden';
			me._sonido_off.ggVisible=true;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
			me._rectangle_1.ggVisible=true;
			me._text_2.ggText="<audio controls=\"controls\" autoplay=\"autoplay\" preload=\"none\">\n<source src=\"http:\/\/stream.radiolabici.com:8000\/live\/#.mp3\" type=\"audio\/mpeg\">\nTu navegador no soporta la etiqueta audio\n<\/audio>";
			me._text_2.ggTextDiv.innerHTML=me._text_2.ggText;
			if (me._text_2.ggUpdateText) {
				me._text_2.ggUpdateText=function() {
					var hs="<audio controls=\"controls\" autoplay=\"autoplay\" preload=\"none\">\n<source src=\"http:\/\/stream.radiolabici.com:8000\/live\/#.mp3\" type=\"audio\/mpeg\">\nTu navegador no soporta la etiqueta audio\n<\/audio>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._text_2.ggUpdatePosition) {
				me._text_2.ggUpdatePosition();
			}
			me._text_2.ggTextDiv.scrollTop = 0;
			me._music_off.style[domTransition]='none';
			me._music_off.style.visibility=(Number(me._music_off.style.opacity)>0||!me._music_off.style.opacity)?'inherit':'hidden';
			me._music_off.ggVisible=true;
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility='hidden';
			me._music_text.ggVisible=false;
		}
		this._sonido_on.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._sonido_on.style[domTransition]='none';
			} else {
				me._sonido_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_on.ggParameter.sx=1.05;me._sonido_on.ggParameter.sy=1.05;
			me._sonido_on.style[domTransform]=parameterToTransform(me._sonido_on.ggParameter);
			me._music_text.style[domTransition]='none';
			me._music_text.style.visibility=(Number(me._music_text.style.opacity)>0||!me._music_text.style.opacity)?'inherit':'hidden';
			me._music_text.ggVisible=true;
		}
		this._sonido_on.onmouseout=function (e) {
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
		this._sonido_on.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._sonido_on);
		this._sonido_off=document.createElement('div');
		this._sonido_off__img=document.createElement('img');
		this._sonido_off__img.className='ggskin ggskin_svg';
		this._sonido_off__img.setAttribute('src',basePath + 'images/sonido_off.svg');
		this._sonido_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._sonido_off__img['ondragstart']=function() { return false; };
		this._sonido_off.appendChild(this._sonido_off__img);
		this._sonido_off.ggId="sonido_off";
		this._sonido_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sonido_off.ggVisible=false;
		this._sonido_off.className="ggskin ggskin_svg ";
		this._sonido_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 389px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._sonido_off.setAttribute('style',hs);
		this._sonido_off.style[domTransform + 'Origin']='50% 50%';
		me._sonido_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sonido_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sonido_off.onclick=function (e) {
			me._sonido_off.style[domTransition]='none';
			me._sonido_off.style.visibility='hidden';
			me._sonido_off.ggVisible=false;
			me._sonido_on.style[domTransition]='none';
			me._sonido_on.style.visibility=(Number(me._sonido_on.style.opacity)>0||!me._sonido_on.style.opacity)?'inherit':'hidden';
			me._sonido_on.ggVisible=true;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility='hidden';
			me._rectangle_1.ggVisible=false;
			me._text_2.ggText="";
			me._text_2.ggTextDiv.innerHTML=me._text_2.ggText;
			if (me._text_2.ggUpdateText) {
				me._text_2.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._text_2.ggUpdatePosition) {
				me._text_2.ggUpdatePosition();
			}
			me._text_2.ggTextDiv.scrollTop = 0;
		}
		this._sonido_off.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._sonido_off.style[domTransition]='none';
			} else {
				me._sonido_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_off.ggParameter.sx=1.05;me._sonido_off.ggParameter.sy=1.05;
			me._sonido_off.style[domTransform]=parameterToTransform(me._sonido_off.ggParameter);
			me._music_off.style[domTransition]='none';
			me._music_off.style.visibility=(Number(me._music_off.style.opacity)>0||!me._music_off.style.opacity)?'inherit':'hidden';
			me._music_off.ggVisible=true;
		}
		this._sonido_off.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._sonido_off.style[domTransition]='none';
			} else {
				me._sonido_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._sonido_off.ggParameter.sx=1;me._sonido_off.ggParameter.sy=1;
			me._sonido_off.style[domTransform]=parameterToTransform(me._sonido_off.ggParameter);
			me._music_off.style[domTransition]='none';
			me._music_off.style.visibility='hidden';
			me._music_off.ggVisible=false;
		}
		this._sonido_off.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._sonido_off);
		this._about=document.createElement('div');
		this._about__img=document.createElement('img');
		this._about__img.className='ggskin ggskin_svg';
		this._about__img.setAttribute('src',basePath + 'images/about.svg');
		this._about__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._about__img['ondragstart']=function() { return false; };
		this._about.appendChild(this._about__img);
		this._about.ggId="about";
		this._about.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about.ggVisible=true;
		this._about.className="ggskin ggskin_svg ";
		this._about.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 340px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._about.setAttribute('style',hs);
		this._about.style[domTransform + 'Origin']='50% 50%';
		me._about.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._about.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._about.onclick=function (e) {
			me._panolist.ggVisible = !me._panolist.ggVisible;
			var flag=me._panolist.ggVisible;
			me._panolist.style[domTransition]='none';
			me._panolist.style.visibility=((flag)&&(Number(me._panolist.style.opacity)>0||!me._panolist.style.opacity))?'inherit':'hidden';
		}
		this._about.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._about.style[domTransition]='none';
			} else {
				me._about.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._about.ggParameter.sx=1.05;me._about.ggParameter.sy=1.05;
			me._about.style[domTransform]=parameterToTransform(me._about.ggParameter);
			me._about_text.style[domTransition]='none';
			me._about_text.style.visibility=(Number(me._about_text.style.opacity)>0||!me._about_text.style.opacity)?'inherit':'hidden';
			me._about_text.ggVisible=true;
		}
		this._about.onmouseout=function (e) {
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
		this._about.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._about);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className="ggskin ggskin_svg ";
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._zoomout.style[domTransition]='none';
			} else {
				me._zoomout.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomout.ggParameter.sx=1.05;me._zoomout.ggParameter.sy=1.05;
			me._zoomout.style[domTransform]=parameterToTransform(me._zoomout.ggParameter);
			me._zoomout_text.style[domTransition]='none';
			me._zoomout_text.style.visibility=(Number(me._zoomout_text.style.opacity)>0||!me._zoomout_text.style.opacity)?'inherit':'hidden';
			me._zoomout_text.ggVisible=true;
		}
		this._zoomout.onmouseout=function (e) {
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
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className="ggskin ggskin_svg ";
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._zoomin.style[domTransition]='none';
			} else {
				me._zoomin.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._zoomin.ggParameter.sx=1.05;me._zoomin.ggParameter.sy=1.05;
			me._zoomin.style[domTransform]=parameterToTransform(me._zoomin.ggParameter);
			me._zoomin_text.style[domTransition]='none';
			me._zoomin_text.style.visibility=(Number(me._zoomin_text.style.opacity)>0||!me._zoomin_text.style.opacity)?'inherit':'hidden';
			me._zoomin_text.ggVisible=true;
		}
		this._zoomin.onmouseout=function (e) {
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
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._zoomin);
		this._map=document.createElement('div');
		this._map__img=document.createElement('img');
		this._map__img.className='ggskin ggskin_svg';
		this._map__img.setAttribute('src',basePath + 'images/map.svg');
		this._map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._map__img['ondragstart']=function() { return false; };
		this._map.appendChild(this._map__img);
		this._map.ggId="map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className="ggskin ggskin_svg ";
		this._map.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 154px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map.onclick=function (e) {
			var flag=me._mapa.ggPositonActive;
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
		this._map.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.ggParameter.sx=1.05;me._map.ggParameter.sy=1.05;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			me._map_text.style[domTransition]='none';
			me._map_text.style.visibility=(Number(me._map_text.style.opacity)>0||!me._map_text.style.opacity)?'inherit':'hidden';
			me._map_text.ggVisible=true;
		}
		this._map.onmouseout=function (e) {
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
		this._map.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._map);
		this._menu_sm=document.createElement('div');
		this._menu_sm__img=document.createElement('img');
		this._menu_sm__img.className='ggskin ggskin_svg';
		this._menu_sm__img.setAttribute('src',basePath + 'images/menu_sm.svg');
		this._menu_sm__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._menu_sm__img['ondragstart']=function() { return false; };
		this._menu_sm.appendChild(this._menu_sm__img);
		this._menu_sm.ggId="menu_sm";
		this._menu_sm.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_sm.ggVisible=true;
		this._menu_sm.className="ggskin ggskin_svg ";
		this._menu_sm.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 300px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		this._menu_sm.setAttribute('style',hs);
		this._menu_sm.style[domTransform + 'Origin']='50% 50%';
		me._menu_sm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_sm.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_sm.onclick=function (e) {
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
		this._menu_sm.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._menu_sm.style[domTransition]='none';
			} else {
				me._menu_sm.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_sm.ggParameter.sx=1.05;me._menu_sm.ggParameter.sy=1.05;
			me._menu_sm.style[domTransform]=parameterToTransform(me._menu_sm.ggParameter);
			me._menusm_text.style[domTransition]='none';
			me._menusm_text.style.visibility=(Number(me._menusm_text.style.opacity)>0||!me._menusm_text.style.opacity)?'inherit':'hidden';
			me._menusm_text.ggVisible=true;
		}
		this._menu_sm.onmouseout=function (e) {
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
		this._menu_sm.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._menu_sm);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggDx=1;
		this._rectangle_1.ggDy=-50;
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=false;
		this._rectangle_1.className="ggskin ggskin_rectangle ";
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._text_2=document.createElement('div');
		this._text_2__text=document.createElement('div');
		this._text_2.className='ggskin ggskin_textdiv';
		this._text_2.ggTextDiv=this._text_2__text;
		this._text_2.ggId="Text 2";
		this._text_2.ggDx=0;
		this._text_2.ggDy=0;
		this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2.ggVisible=true;
		this._text_2.className="ggskin ggskin_text ";
		this._text_2.ggType='text';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 318px;';
		hs+='pointer-events:auto;';
		this._text_2.setAttribute('style',hs);
		this._text_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 318px;';
		hs+='height: 40px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._text_2__text.setAttribute('style',hs);
		this._text_2__text.innerHTML="";
		this._text_2.appendChild(this._text_2__text);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_1.appendChild(this._text_2);
		this._container_1.appendChild(this._rectangle_1);
		this.divSkin.appendChild(this._container_1);
		this._mapa=document.createElement('div');
		this._mapa.ggId="mapa";
		this._mapa.ggDy=-9.5;
		this._mapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapa.ggVisible=true;
		this._mapa.className="ggskin ggskin_rectangle ";
		this._mapa.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 467px;';
		hs+='left : -310px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		this._mapa.setAttribute('style',hs);
		this._mapa.style[domTransform + 'Origin']='50% 50%';
		me._mapa.ggIsActive=function() {
			return false;
		}
		me._mapa.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapa.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._cerrarmapa=document.createElement('div');
		this._cerrarmapa__img=document.createElement('img');
		this._cerrarmapa__img.className='ggskin ggskin_svg';
		this._cerrarmapa__img.setAttribute('src',basePath + 'images/cerrarmapa.svg');
		this._cerrarmapa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._cerrarmapa__img['ondragstart']=function() { return false; };
		this._cerrarmapa.appendChild(this._cerrarmapa__img);
		this._cerrarmapa.ggId="cerrar-mapa";
		this._cerrarmapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cerrarmapa.ggVisible=true;
		this._cerrarmapa.className="ggskin ggskin_svg ";
		this._cerrarmapa.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 59px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:auto;';
		this._cerrarmapa.setAttribute('style',hs);
		this._cerrarmapa.style[domTransform + 'Origin']='50% 50%';
		me._cerrarmapa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._cerrarmapa.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._cerrarmapa.onclick=function (e) {
			var flag=me._mapa.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._mapa.style[domTransition]='none';
			} else {
				me._mapa.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._mapa.ggParameter.rx=0;me._mapa.ggParameter.ry=0;
				me._mapa.style[domTransform]=parameterToTransform(me._mapa.ggParameter);
			} else {
				me._mapa.ggParameter.rx=0;me._mapa.ggParameter.ry=0;
				me._mapa.style[domTransform]=parameterToTransform(me._mapa.ggParameter);
			}
			me._mapa.ggPositonActive=!flag;
		}
		this._cerrarmapa.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._cerrarmapa.style[domTransition]='none';
			} else {
				me._cerrarmapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cerrarmapa.ggParameter.sx=1.05;me._cerrarmapa.ggParameter.sy=1.05;
			me._cerrarmapa.style[domTransform]=parameterToTransform(me._cerrarmapa.ggParameter);
		}
		this._cerrarmapa.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._cerrarmapa.style[domTransition]='none';
			} else {
				me._cerrarmapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cerrarmapa.ggParameter.sx=1;me._cerrarmapa.ggParameter.sy=1;
			me._cerrarmapa.style[domTransform]=parameterToTransform(me._cerrarmapa.ggParameter);
		}
		this._cerrarmapa.ggUpdatePosition=function (useTransition) {
		}
		this._mapa.appendChild(this._cerrarmapa);
		this._textomapa=document.createElement('div');
		this._textomapa__text=document.createElement('div');
		this._textomapa.className='ggskin ggskin_textdiv';
		this._textomapa.ggTextDiv=this._textomapa__text;
		this._textomapa.ggId="texto-mapa";
		this._textomapa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._textomapa.ggVisible=false;
		this._textomapa.className="ggskin ggskin_text ";
		this._textomapa.ggType='text';
		hs ='';
		hs+='height : 482px;';
		hs+='left : 4px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		this._textomapa.setAttribute('style',hs);
		this._textomapa.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 265px;';
		hs+='height: 480px;';
		hs+='background: #ffffff;';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 3px 1px 3px;';
		hs+='overflow: hidden;';
		this._textomapa__text.setAttribute('style',hs);
		this._textomapa__text.innerHTML="<div id=\"mapdiv\" style=\"width:270px; height:480px\">map goes here!<\/div>";
		this._textomapa.appendChild(this._textomapa__text);
		me._textomapa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._textomapa.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._textomapa.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._textomapa.style[domTransition]='none';
			} else {
				me._textomapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._textomapa.style.opacity='1';
			me._textomapa.style.visibility=me._textomapa.ggVisible?'inherit':'hidden';
		}
		this._textomapa.onmouseout=function (e) {
			if (e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._textomapa__text)
					return;
				}
			}
			if (me.player.transitionsDisabled) {
				me._textomapa.style[domTransition]='none';
			} else {
				me._textomapa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._textomapa.style.opacity='0.8';
			me._textomapa.style.visibility=me._textomapa.ggVisible?'inherit':'hidden';
		}
		this._textomapa.ggUpdatePosition=function (useTransition) {
		}
		this._mapa.appendChild(this._textomapa);
		this._map_1=document.createElement('div');
		this._map_1.ggFilter = '';
		this._map_1.ggFilteredIds = [];
		this._map_1.ggId="Map 1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className="ggskin ggskin_map ";
		this._map_1.ggType='map';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 482px;';
		hs+='left : 4px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		this._map_1.setAttribute('style',hs);
		this._map_1.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		this._map_1.ggUpdatePosition=function (useTransition) {
		}
		this._map_1.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
			if (me.player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = me.player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = me.player.getMapContainingNode(id);
					if (mapId != '') {
							this.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		this._mapa.appendChild(this._map_1);
		this.divSkin.appendChild(this._mapa);
		this._panolist=document.createElement('div');
		this._panolist.ggId="pano-list";
		this._panolist.ggDx=7.5;
		this._panolist.ggDy=-6;
		this._panolist.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._panolist.ggVisible=false;
		this._panolist.className="ggskin ggskin_rectangle ";
		this._panolist.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 320px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 479px;';
		hs+='pointer-events:auto;';
		this._panolist.setAttribute('style',hs);
		this._panolist.style[domTransform + 'Origin']='50% 50%';
		me._panolist.ggIsActive=function() {
			return false;
		}
		me._panolist.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._panolist.onclick=function (e) {
			me._panolist.style[domTransition]='none';
			me._panolist.style.visibility='hidden';
			me._panolist.ggVisible=false;
		}
		this._panolist.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className="ggskin ggskin_image ";
		this._image_3.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function (e) {
			me.player.openUrl("https:\/\/www.facebook.com\/radiola.bici","_blank");
		}
		this._image_3.ggUpdatePosition=function (useTransition) {
		}
		this._panolist.appendChild(this._image_3);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className="ggskin ggskin_text ";
		this._text_1.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 294px;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<b>www.radiolabici.com<\/b>";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_1.onclick=function (e) {
			me.player.openUrl("http:\/\/www.radiolabici.com","_blank");
		}
		this._text_1.ggUpdatePosition=function (useTransition) {
		}
		this._panolist.appendChild(this._text_1);
		this._closebutton=document.createElement('div');
		this._closebutton__img=document.createElement('img');
		this._closebutton__img.className='ggskin ggskin_svg';
		this._closebutton__img.setAttribute('src',basePath + 'images/closebutton.svg');
		this._closebutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._closebutton__img['ondragstart']=function() { return false; };
		this._closebutton.appendChild(this._closebutton__img);
		this._closebutton.ggId="close-button";
		this._closebutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._closebutton.ggVisible=true;
		this._closebutton.className="ggskin ggskin_svg ";
		this._closebutton.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 59px;';
		hs+='left : 430px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:auto;';
		this._closebutton.setAttribute('style',hs);
		this._closebutton.style[domTransform + 'Origin']='50% 50%';
		me._closebutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._closebutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._closebutton.onclick=function (e) {
			me._panolist.style[domTransition]='none';
			me._panolist.style.visibility='hidden';
			me._panolist.ggVisible=false;
		}
		this._closebutton.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._closebutton.style[domTransition]='none';
			} else {
				me._closebutton.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closebutton.ggParameter.sx=1.05;me._closebutton.ggParameter.sy=1.05;
			me._closebutton.style[domTransform]=parameterToTransform(me._closebutton.ggParameter);
		}
		this._closebutton.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._closebutton.style[domTransition]='none';
			} else {
				me._closebutton.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closebutton.ggParameter.sx=1;me._closebutton.ggParameter.sy=1;
			me._closebutton.style[domTransform]=parameterToTransform(me._closebutton.ggParameter);
		}
		this._closebutton.ggUpdatePosition=function (useTransition) {
		}
		this._panolist.appendChild(this._closebutton);
		this.divSkin.appendChild(this._panolist);
		this._toggle_gyro=document.createElement('div');
		this._toggle_gyro.ggId="toggle_gyro";
		this._toggle_gyro.ggDx=-6.5;
		this._toggle_gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggle_gyro.ggVisible=true;
		this._toggle_gyro.className="ggskin ggskin_container ";
		this._toggle_gyro.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 49px;';
		hs+='pointer-events:none;';
		this._toggle_gyro.setAttribute('style',hs);
		this._toggle_gyro.style[domTransform + 'Origin']='50% 50%';
		me._toggle_gyro.ggIsActive=function() {
			return false;
		}
		me._toggle_gyro.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toggle_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._gyro_off=document.createElement('div');
		this._gyro_off__img=document.createElement('img');
		this._gyro_off__img.className='ggskin ggskin_svg';
		this._gyro_off__img.setAttribute('src',basePath + 'images/gyro_off.svg');
		this._gyro_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._gyro_off__img['ondragstart']=function() { return false; };
		this._gyro_off.appendChild(this._gyro_off__img);
		this._gyro_off.ggId="gyro_off";
		this._gyro_off.ggDx=6.5;
		this._gyro_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_off.ggVisible=false;
		this._gyro_off.className="ggskin ggskin_svg ";
		this._gyro_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -59px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._gyro_off.setAttribute('style',hs);
		this._gyro_off.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyro_off.onclick=function (e) {
			me._gyro_on.style[domTransition]='none';
			me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
			me._gyro_on.ggVisible=true;
			me._gyro_off.style[domTransition]='none';
			me._gyro_off.style.visibility='hidden';
			me._gyro_off.ggVisible=false;
			gyro.disable();
		}
		this._gyro_off.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.ggParameter.sx=1.05;me._gyro_off.ggParameter.sy=1.05;
			me._gyro_off.style[domTransform]=parameterToTransform(me._gyro_off.ggParameter);
			me._gyrooff_text.style[domTransition]='none';
			me._gyrooff_text.style.visibility=(Number(me._gyrooff_text.style.opacity)>0||!me._gyrooff_text.style.opacity)?'inherit':'hidden';
			me._gyrooff_text.ggVisible=true;
		}
		this._gyro_off.onmouseout=function (e) {
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
		this._gyro_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._toggle_gyro.appendChild(this._gyro_off);
		this._gyro_on=document.createElement('div');
		this._gyro_on__img=document.createElement('img');
		this._gyro_on__img.className='ggskin ggskin_svg';
		this._gyro_on__img.setAttribute('src',basePath + 'images/gyro_on.svg');
		this._gyro_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._gyro_on__img['ondragstart']=function() { return false; };
		this._gyro_on.appendChild(this._gyro_on__img);
		this._gyro_on.ggId="gyro_on";
		this._gyro_on.ggDx=6.5;
		this._gyro_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_on.ggVisible=true;
		this._gyro_on.className="ggskin ggskin_svg ";
		this._gyro_on.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -59px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._gyro_on.setAttribute('style',hs);
		this._gyro_on.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyro_on.onclick=function (e) {
			me._gyro_on.style[domTransition]='none';
			me._gyro_on.style.visibility='hidden';
			me._gyro_on.ggVisible=false;
			me._gyro_off.style[domTransition]='none';
			me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
			me._gyro_off.ggVisible=true;
			gyro.enable();
		}
		this._gyro_on.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.ggParameter.sx=1.05;me._gyro_on.ggParameter.sy=1.05;
			me._gyro_on.style[domTransform]=parameterToTransform(me._gyro_on.ggParameter);
			me._gyro_text.style[domTransition]='none';
			me._gyro_text.style.visibility=(Number(me._gyro_text.style.opacity)>0||!me._gyro_text.style.opacity)?'inherit':'hidden';
			me._gyro_text.ggVisible=true;
		}
		this._gyro_on.onmouseout=function (e) {
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
		this._gyro_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._toggle_gyro.appendChild(this._gyro_on);
		this._gyrooff_text=document.createElement('div');
		this._gyrooff_text__text=document.createElement('div');
		this._gyrooff_text.className='ggskin ggskin_textdiv';
		this._gyrooff_text.ggTextDiv=this._gyrooff_text__text;
		this._gyrooff_text.ggId="gyrooff_text";
		this._gyrooff_text.ggDx=4.5;
		this._gyrooff_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyrooff_text.ggVisible=false;
		this._gyrooff_text.className="ggskin ggskin_text ";
		this._gyrooff_text.ggType='text';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 281px;';
		hs+='pointer-events:auto;';
		this._gyrooff_text.setAttribute('style',hs);
		this._gyrooff_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 281px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._gyrooff_text__text.setAttribute('style',hs);
		this._gyrooff_text__text.innerHTML="Control Manual";
		this._gyrooff_text.appendChild(this._gyrooff_text__text);
		me._gyrooff_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyrooff_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyrooff_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._toggle_gyro.appendChild(this._gyrooff_text);
		this._gyro_text=document.createElement('div');
		this._gyro_text__text=document.createElement('div');
		this._gyro_text.className='ggskin ggskin_textdiv';
		this._gyro_text.ggTextDiv=this._gyro_text__text;
		this._gyro_text.ggId="gyro_text";
		this._gyro_text.ggDx=4.5;
		this._gyro_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_text.ggVisible=false;
		this._gyro_text.className="ggskin ggskin_text ";
		this._gyro_text.ggType='text';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 281px;';
		hs+='pointer-events:auto;';
		this._gyro_text.setAttribute('style',hs);
		this._gyro_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 281px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._gyro_text__text.setAttribute('style',hs);
		this._gyro_text__text.innerHTML="Activar Giroscopio";
		this._gyro_text.appendChild(this._gyro_text__text);
		me._gyro_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyro_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._toggle_gyro.appendChild(this._gyro_text);
		this.divSkin.appendChild(this._toggle_gyro);
		this._dropdown_menu=document.createElement('div');
		this._dropdown_menu.ggId="dropdown_menu";
		this._dropdown_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu.ggVisible=true;
		this._dropdown_menu.className="ggskin ggskin_container ";
		this._dropdown_menu.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		this._dropdown_menu.setAttribute('style',hs);
		this._dropdown_menu.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		me._dropdown_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._dropdown_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._menu_select_a=document.createElement('div');
		this._menu_select_a.ggId="menu_select_a";
		this._menu_select_a.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_a.ggVisible=true;
		this._menu_select_a.className="ggskin ggskin_rectangle ";
		this._menu_select_a.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 164px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		this._menu_select_a.setAttribute('style',hs);
		this._menu_select_a.style[domTransform + 'Origin']='50% 50%';
		me._menu_select_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_a.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_a.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_title_a=document.createElement('div');
		this._menu_select_title_a__text=document.createElement('div');
		this._menu_select_title_a.className='ggskin ggskin_textdiv';
		this._menu_select_title_a.ggTextDiv=this._menu_select_title_a__text;
		this._menu_select_title_a.ggId="menu_select_title_a";
		this._menu_select_title_a.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_title_a.ggVisible=true;
		this._menu_select_title_a.className="ggskin ggskin_text ";
		this._menu_select_title_a.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_select_title_a.setAttribute('style',hs);
		this._menu_select_title_a.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menu_select_title_a__text.setAttribute('style',hs);
		this._menu_select_title_a__text.innerHTML="Entrada";
		this._menu_select_title_a.appendChild(this._menu_select_title_a__text);
		me._menu_select_title_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_title_a.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_title_a.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_a.appendChild(this._menu_select_title_a);
		this._menu_button_a=document.createElement('div');
		this._menu_button_a.ggId="menu_button_a";
		this._menu_button_a.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_button_a.ggVisible=true;
		this._menu_button_a.className="ggskin ggskin_rectangle ";
		this._menu_button_a.ggType='rectangle';
		hs ='';
		hs+='background : rgba(240,240,240,0.0392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_button_a.setAttribute('style',hs);
		this._menu_button_a.style[domTransform + 'Origin']='50% 50%';
		me._menu_button_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_button_a.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_button_a.onclick=function (e) {
			me._menu_active_a.style[domTransition]='none';
			me._menu_active_a.ggParameter.sx=1;me._menu_active_a.ggParameter.sy=1;
			me._menu_active_a.style[domTransform]=parameterToTransform(me._menu_active_a.ggParameter);
			var list=me.findElements("menu_active_[b,c]",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.sx=0;e.ggParameter.sy=0;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me.player.openNext("{node3}","");
		}
		this._menu_button_a.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_a.appendChild(this._menu_button_a);
		this._menu_active_a=document.createElement('div');
		this._menu_active_a.ggId="menu_active_a";
		this._menu_active_a.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_active_a.ggVisible=true;
		this._menu_active_a.className="ggskin ggskin_rectangle ";
		this._menu_active_a.ggType='rectangle';
		hs ='';
		hs+='background : rgba(240,240,240,0.0392157);';
		hs+='border : 0px solid #7d7d7d;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_active_a.setAttribute('style',hs);
		this._menu_active_a.style[domTransform + 'Origin']='50% 50%';
		me._menu_active_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_a.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_a.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_marker_a=document.createElement('div');
		this._menu_active_marker_a.ggId="menu_active_marker_a";
		this._menu_active_marker_a.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_active_marker_a.ggVisible=true;
		this._menu_active_marker_a.className="ggskin ggskin_rectangle ";
		this._menu_active_marker_a.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #f0f0f0;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._menu_active_marker_a.setAttribute('style',hs);
		this._menu_active_marker_a.style[domTransform + 'Origin']='50% 50%';
		me._menu_active_marker_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_marker_a.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_marker_a.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_a.appendChild(this._menu_active_marker_a);
		this._menu_select_a.appendChild(this._menu_active_a);
		this._dropdown_menu.appendChild(this._menu_select_a);
		this._menu_select_b=document.createElement('div');
		this._menu_select_b.ggId="menu_select_b";
		this._menu_select_b.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_b.ggVisible=true;
		this._menu_select_b.className="ggskin ggskin_rectangle ";
		this._menu_select_b.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 214px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		this._menu_select_b.setAttribute('style',hs);
		this._menu_select_b.style[domTransform + 'Origin']='50% 50%';
		me._menu_select_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_b.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_b.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_title_b=document.createElement('div');
		this._menu_select_title_b__text=document.createElement('div');
		this._menu_select_title_b.className='ggskin ggskin_textdiv';
		this._menu_select_title_b.ggTextDiv=this._menu_select_title_b__text;
		this._menu_select_title_b.ggId="menu_select_title_b";
		this._menu_select_title_b.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_title_b.ggVisible=true;
		this._menu_select_title_b.className="ggskin ggskin_text ";
		this._menu_select_title_b.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_select_title_b.setAttribute('style',hs);
		this._menu_select_title_b.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menu_select_title_b__text.setAttribute('style',hs);
		this._menu_select_title_b__text.innerHTML="Sal\xf3n";
		this._menu_select_title_b.appendChild(this._menu_select_title_b__text);
		me._menu_select_title_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_title_b.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_title_b.onmouseover=function (e) {
			me._menu_select_title_b.ggText="<b><\/b>";
			me._menu_select_title_b.ggTextDiv.innerHTML=me._menu_select_title_b.ggText;
			if (me._menu_select_title_b.ggUpdateText) {
				me._menu_select_title_b.ggUpdateText=function() {
					var hs="<b><\/b>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._menu_select_title_b.ggUpdatePosition) {
				me._menu_select_title_b.ggUpdatePosition();
			}
			me._menu_select_title_b.ggTextDiv.scrollTop = 0;
		}
		this._menu_select_title_b.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_b.appendChild(this._menu_select_title_b);
		this._menu_button_b=document.createElement('div');
		this._menu_button_b.ggId="menu_button_b";
		this._menu_button_b.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_button_b.ggVisible=true;
		this._menu_button_b.className="ggskin ggskin_rectangle ";
		this._menu_button_b.ggType='rectangle';
		hs ='';
		hs+='background : rgba(240,240,240,0.0392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_button_b.setAttribute('style',hs);
		this._menu_button_b.style[domTransform + 'Origin']='50% 50%';
		me._menu_button_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_button_b.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_button_b.onclick=function (e) {
			me._menu_active_b.style[domTransition]='none';
			me._menu_active_b.ggParameter.sx=1;me._menu_active_b.ggParameter.sy=1;
			me._menu_active_b.style[domTransform]=parameterToTransform(me._menu_active_b.ggParameter);
			var list=me.findElements("menu_active_[a,c]",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.sx=0;e.ggParameter.sy=0;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me.player.openNext("{node2}","");
		}
		this._menu_button_b.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_b.appendChild(this._menu_button_b);
		this._menu_active_b=document.createElement('div');
		this._menu_active_b.ggId="menu_active_b";
		this._menu_active_b.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._menu_active_b.ggVisible=true;
		this._menu_active_b.className="ggskin ggskin_rectangle ";
		this._menu_active_b.ggType='rectangle';
		hs ='';
		hs+='background : rgba(240,240,240,0.0392157);';
		hs+='border : 0px solid #7d7d7d;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_active_b.setAttribute('style',hs);
		this._menu_active_b.style[domTransform + 'Origin']='50% 50%';
		this._menu_active_b.style[domTransform]=parameterToTransform(this._menu_active_b.ggParameter);
		me._menu_active_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_b.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_b.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_marker_b=document.createElement('div');
		this._menu_active_marker_b.ggId="menu_active_marker_b";
		this._menu_active_marker_b.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_active_marker_b.ggVisible=true;
		this._menu_active_marker_b.className="ggskin ggskin_rectangle ";
		this._menu_active_marker_b.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._menu_active_marker_b.setAttribute('style',hs);
		this._menu_active_marker_b.style[domTransform + 'Origin']='50% 50%';
		me._menu_active_marker_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_marker_b.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_marker_b.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_b.appendChild(this._menu_active_marker_b);
		this._menu_select_b.appendChild(this._menu_active_b);
		this._dropdown_menu.appendChild(this._menu_select_b);
		this._menu_select_c=document.createElement('div');
		this._menu_select_c.ggId="menu_select_c";
		this._menu_select_c.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_c.ggVisible=true;
		this._menu_select_c.className="ggskin ggskin_rectangle ";
		this._menu_select_c.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 264px;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		this._menu_select_c.setAttribute('style',hs);
		this._menu_select_c.style[domTransform + 'Origin']='50% 50%';
		me._menu_select_c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_c.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_c.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_title_c=document.createElement('div');
		this._menu_select_title_c__text=document.createElement('div');
		this._menu_select_title_c.className='ggskin ggskin_textdiv';
		this._menu_select_title_c.ggTextDiv=this._menu_select_title_c__text;
		this._menu_select_title_c.ggId="menu_select_title_c";
		this._menu_select_title_c.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_select_title_c.ggVisible=true;
		this._menu_select_title_c.className="ggskin ggskin_text ";
		this._menu_select_title_c.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_select_title_c.setAttribute('style',hs);
		this._menu_select_title_c.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menu_select_title_c__text.setAttribute('style',hs);
		this._menu_select_title_c__text.innerHTML="Estudio";
		this._menu_select_title_c.appendChild(this._menu_select_title_c__text);
		me._menu_select_title_c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_select_title_c.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_select_title_c.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_c.appendChild(this._menu_select_title_c);
		this._menu_button_c=document.createElement('div');
		this._menu_button_c.ggId="menu_button_c";
		this._menu_button_c.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_button_c.ggVisible=true;
		this._menu_button_c.className="ggskin ggskin_rectangle ";
		this._menu_button_c.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_button_c.setAttribute('style',hs);
		this._menu_button_c.style[domTransform + 'Origin']='50% 50%';
		me._menu_button_c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_button_c.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_button_c.onclick=function (e) {
			me._menu_active_c.style[domTransition]='none';
			me._menu_active_c.ggParameter.sx=1;me._menu_active_c.ggParameter.sy=1;
			me._menu_active_c.style[domTransform]=parameterToTransform(me._menu_active_c.ggParameter);
			var list=me.findElements("menu_active_[a,b]",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.sx=0;e.ggParameter.sy=0;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me.player.openNext("{node1}","");
		}
		this._menu_button_c.ggUpdatePosition=function (useTransition) {
		}
		this._menu_select_c.appendChild(this._menu_button_c);
		this._menu_active_c=document.createElement('div');
		this._menu_active_c.ggId="menu_active_c";
		this._menu_active_c.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._menu_active_c.ggVisible=true;
		this._menu_active_c.className="ggskin ggskin_rectangle ";
		this._menu_active_c.ggType='rectangle';
		hs ='';
		hs+='background : rgba(240,240,240,0.0392157);';
		hs+='border : 0px solid #7d7d7d;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_active_c.setAttribute('style',hs);
		this._menu_active_c.style[domTransform + 'Origin']='50% 50%';
		this._menu_active_c.style[domTransform]=parameterToTransform(this._menu_active_c.ggParameter);
		me._menu_active_c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_c.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_c.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_marker_c=document.createElement('div');
		this._menu_active_marker_c.ggId="menu_active_marker_c";
		this._menu_active_marker_c.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_active_marker_c.ggVisible=true;
		this._menu_active_marker_c.className="ggskin ggskin_rectangle ";
		this._menu_active_marker_c.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._menu_active_marker_c.setAttribute('style',hs);
		this._menu_active_marker_c.style[domTransform + 'Origin']='50% 50%';
		me._menu_active_marker_c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_active_marker_c.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_active_marker_c.ggUpdatePosition=function (useTransition) {
		}
		this._menu_active_c.appendChild(this._menu_active_marker_c);
		this._menu_select_c.appendChild(this._menu_active_c);
		this._dropdown_menu.appendChild(this._menu_select_c);
		this._menu_bg=document.createElement('div');
		this._menu_bg.ggId="menu_bg";
		this._menu_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_bg.ggVisible=true;
		this._menu_bg.className="ggskin ggskin_rectangle ";
		this._menu_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 2px;';
		hs+='border-radius : 2px;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		this._menu_bg.setAttribute('style',hs);
		this._menu_bg.style[domTransform + 'Origin']='50% 50%';
		me._menu_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_bg.ggUpdatePosition=function (useTransition) {
		}
		this._menu_title=document.createElement('div');
		this._menu_title__text=document.createElement('div');
		this._menu_title.className='ggskin ggskin_textdiv';
		this._menu_title.ggTextDiv=this._menu_title__text;
		this._menu_title.ggId="menu_title";
		this._menu_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_title.ggVisible=true;
		this._menu_title.className="ggskin ggskin_text ";
		this._menu_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_title.setAttribute('style',hs);
		this._menu_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._menu_title__text.setAttribute('style',hs);
		this._menu_title__text.innerHTML="<b>Seleccionar Sala<b>";
		this._menu_title.appendChild(this._menu_title__text);
		me._menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_title.ggUpdatePosition=function (useTransition) {
		}
		this._menu_bg.appendChild(this._menu_title);
		this._menu_down=document.createElement('div');
		this._menu_down.ggId="menu_down";
		this._menu_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_down.ggVisible=true;
		this._menu_down.className="ggskin ggskin_rectangle ";
		this._menu_down.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #dcdcdc;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_down.setAttribute('style',hs);
		this._menu_down.style[domTransform + 'Origin']='50% 50%';
		me._menu_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_down.onclick=function (e) {
			me._menu_down.style[domTransition]='none';
			me._menu_down.ggParameter.sx=0;me._menu_down.ggParameter.sy=0;
			me._menu_down.style[domTransform]=parameterToTransform(me._menu_down.ggParameter);
			me._menu_up.style[domTransition]='none';
			me._menu_up.ggParameter.sx=1;me._menu_up.ggParameter.sy=1;
			me._menu_up.style[domTransform]=parameterToTransform(me._menu_up.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu_select_a.style[domTransition]='none';
			} else {
				me._menu_select_a.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._menu_select_a.ggParameter.rx=-164;me._menu_select_a.ggParameter.ry=0;
			me._menu_select_a.style[domTransform]=parameterToTransform(me._menu_select_a.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu_select_b.style[domTransition]='none';
			} else {
				me._menu_select_b.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._menu_select_b.ggParameter.rx=-214;me._menu_select_b.ggParameter.ry=0;
			me._menu_select_b.style[domTransform]=parameterToTransform(me._menu_select_b.ggParameter);
			if (me.player.transitionsDisabled) {
				me._menu_select_c.style[domTransition]='none';
			} else {
				me._menu_select_c.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._menu_select_c.ggParameter.rx=-264;me._menu_select_c.ggParameter.ry=0;
			me._menu_select_c.style[domTransform]=parameterToTransform(me._menu_select_c.ggParameter);
		}
		this._menu_down.onmouseover=function (e) {
			me._menu_title.ggText="Desplegar";
			me._menu_title.ggTextDiv.innerHTML=me._menu_title.ggText;
			if (me._menu_title.ggUpdateText) {
				me._menu_title.ggUpdateText=function() {
					var hs="Desplegar";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._menu_title.ggUpdatePosition) {
				me._menu_title.ggUpdatePosition();
			}
			me._menu_title.ggTextDiv.scrollTop = 0;
		}
		this._menu_down.onmouseout=function (e) {
			me._menu_title.ggText="Seleccionar Sala";
			me._menu_title.ggTextDiv.innerHTML=me._menu_title.ggText;
			if (me._menu_title.ggUpdateText) {
				me._menu_title.ggUpdateText=function() {
					var hs="Seleccionar Sala";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._menu_title.ggUpdatePosition) {
				me._menu_title.ggUpdatePosition();
			}
			me._menu_title.ggTextDiv.scrollTop = 0;
		}
		this._menu_down.ggUpdatePosition=function (useTransition) {
		}
		this._menu_bg.appendChild(this._menu_down);
		this._menu_up=document.createElement('div');
		this._menu_up.ggId="menu_up";
		this._menu_up.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._menu_up.ggVisible=true;
		this._menu_up.className="ggskin ggskin_rectangle ";
		this._menu_up.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #dcdcdc;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._menu_up.setAttribute('style',hs);
		this._menu_up.style[domTransform + 'Origin']='50% 50%';
		this._menu_up.style[domTransform]=parameterToTransform(this._menu_up.ggParameter);
		me._menu_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_up.onclick=function (e) {
			var list=me.findElements("menu_select_.*",true);
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.ggParameter.rx=0;e.ggParameter.ry=0;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._menu_up.style[domTransition]='none';
			me._menu_up.ggParameter.sx=0;me._menu_up.ggParameter.sy=0;
			me._menu_up.style[domTransform]=parameterToTransform(me._menu_up.ggParameter);
			me._menu_down.style[domTransition]='none';
			me._menu_down.ggParameter.sx=1;me._menu_down.ggParameter.sy=1;
			me._menu_down.style[domTransform]=parameterToTransform(me._menu_down.ggParameter);
		}
		this._menu_up.onmouseover=function (e) {
			me._menu_title.ggText="Cerrar";
			me._menu_title.ggTextDiv.innerHTML=me._menu_title.ggText;
			if (me._menu_title.ggUpdateText) {
				me._menu_title.ggUpdateText=function() {
					var hs="Cerrar";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._menu_title.ggUpdatePosition) {
				me._menu_title.ggUpdatePosition();
			}
			me._menu_title.ggTextDiv.scrollTop = 0;
		}
		this._menu_up.onmouseout=function (e) {
			me._menu_title.ggText="Seleccionar Sala";
			me._menu_title.ggTextDiv.innerHTML=me._menu_title.ggText;
			if (me._menu_title.ggUpdateText) {
				me._menu_title.ggUpdateText=function() {
					var hs="Seleccionar Sala";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._menu_title.ggUpdatePosition) {
				me._menu_title.ggUpdatePosition();
			}
			me._menu_title.ggTextDiv.scrollTop = 0;
		}
		this._menu_up.ggUpdatePosition=function (useTransition) {
		}
		this._menu_bg.appendChild(this._menu_up);
		this._dropdown_menu.appendChild(this._menu_bg);
		this.divSkin.appendChild(this._dropdown_menu);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=true;
		this._screentint.className="ggskin ggskin_rectangle ";
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.1%;';
		hs+='position : absolute;';
		hs+='top : -0.14%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggDx=0;
		this._image_1.ggDy=1;
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._image_1.ggVisible=true;
		this._image_1.className="ggskin ggskin_image ";
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 479px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		this._image_1.style[domTransform]=parameterToTransform(this._image_1.ggParameter);
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.onclick=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='hidden';
			me._image_1.ggVisible=false;
			me._menu.style[domTransition]='none';
			me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
			me._menu.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_1);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggDx=5;
		this._loading.ggDy=-25;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className="ggskin ggskin_container ";
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className="ggskin ggskin_rectangle ";
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbg);
		this._image_10=document.createElement('div');
		this._image_10__img=document.createElement('img');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
		this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_10__img);
		this._image_10.appendChild(this._image_10__img);
		this._image_10.ggId="Image 10";
		this._image_10.ggDx=-3;
		this._image_10.ggDy=35;
		this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_10.ggVisible=true;
		this._image_10.className="ggskin ggskin_image ";
		this._image_10.ggType='image';
		hs ='';
		hs+='height : 500px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._image_10.setAttribute('style',hs);
		this._image_10.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._loading.appendChild(this._image_10);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className="ggskin ggskin_rectangle ";
		this._loadingbrd.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		this._loadingbrd.setAttribute('style',hs);
		this._loadingbrd.style[domTransform + 'Origin']='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbrd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbrd.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className="ggskin ggskin_text ";
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className="ggskin ggskin_rectangle ";
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._map_1.ggMarkerInstances=[];
		this._map_1.ggMapId = 'googleroadmap';
		this._map_1.ggLastNodeId=null;
		this._map_1.ggMarkerArray=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggLastZoom = -1;
		this._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		this._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = me.player.getFov();
			var pan = me.player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var rLat = 4.0*r2d / Math.pow(2,zoom);     // beam size
				var rLng = rLat/Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ffffff',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ffffff',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		this._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		this._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = me.player.getMapType(me._map_1.ggMapId);
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_1.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_1.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_1.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_1.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				if (mapTypeId == 'openstreetmap') {
					me._map_1.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'http://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'http://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map_1.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token='  + mapDetails['mapkey'];
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map_1.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_1.ggTileAvailable(coord.x, coord.y, zoom)) {
							return 'images/maptiles/' + me._map_1.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_1.ggMap.mapTypes.set(me._map_1.ggMapId, customMapType);
				me._map_1.ggMap.setMapTypeId(me._map_1.ggMapId);
				google.maps.event.addListener(me._map_1.ggMap, 'center_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map_1.ggMap, 'zoom_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
			}
		}
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		this._map_1.ggFitBounds=function(force) {
			if (!me._map_1.ggMarkerBounds.isEmpty()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, 30);
					me._map_1.ggMap.panToBounds(me._map_1.ggMarkerBounds);
				} else {
					me._map_1.ggMap.setCenter(me._map_1.ggMarkerBounds.getCenter());
					if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		this._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = me.player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=me.player.getNodeLatLng(id);
				} else {
					gps=me.player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray[id] = marker;
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_1.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		this._map_1.ggChangeMap=function(mapId) {
			var newMapType = me.player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(true);
			me._map_1.ggInitMapMarkers(false);
		}
		this._map_1.ggInCheckBounds=false;
		this._map_1.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var mapWidthInDeg = 360.0 / Math.pow(2, 7);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			me._map_1.ggMap.setCenter(new google.maps.LatLng(y, x));
			me._map_1.ggInCheckBounds = false;
		}
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		this.player.addListener('configloaded', function() {
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		this.player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		this.player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyDoubleClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
		me._map_1.ggNodeChange();
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-0.5,true);
		}
		me._map_1.ggUpdateConditionTimer();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	this.player.addListener('timer', this.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._hotspot_1=document.createElement('div');
		this._hotspot_1.ggId="Hotspot 1";
		this._hotspot_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspot_1.ggVisible=true;
		this._hotspot_1.className="ggskin ggskin_hotspot ";
		this._hotspot_1.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 320px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._hotspot_1.setAttribute('style',hs);
		this._hotspot_1.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hotspot_1.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._hotspot_1.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._hotspot_1.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._hotspot_1.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me._hstext.style[domTransition]='none';
			me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
			me._hstext.ggVisible=true;
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._hotspot_1.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me._hstext.style[domTransition]='none';
			me._hstext.style.visibility='hidden';
			me._hstext.ggVisible=false;
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		this._enter_nextpano=document.createElement('div');
		this._enter_nextpano__img=document.createElement('img');
		this._enter_nextpano__img.className='ggskin ggskin_svg';
		this._enter_nextpano__img.setAttribute('src',basePath + 'images/enter_nextpano.svg');
		this._enter_nextpano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._enter_nextpano__img['ondragstart']=function() { return false; };
		this._enter_nextpano.appendChild(this._enter_nextpano__img);
		this._enter_nextpano.ggId="enter_nextpano";
		this._enter_nextpano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._enter_nextpano.ggVisible=false;
		this._enter_nextpano.className="ggskin ggskin_svg ";
		this._enter_nextpano.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 71px;';
		hs+='left : -39px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		this._enter_nextpano.setAttribute('style',hs);
		this._enter_nextpano.style[domTransform + 'Origin']='50% 50%';
		me._enter_nextpano.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._enter_nextpano.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._enter_nextpano.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
		}
		this._enter_nextpano.onmouseout=function (e) {
			me._next_pano.style[domTransition]='none';
			me._next_pano.style.visibility=(Number(me._next_pano.style.opacity)>0||!me._next_pano.style.opacity)?'inherit':'hidden';
			me._next_pano.ggVisible=true;
			me._enter_nextpano.style[domTransition]='none';
			me._enter_nextpano.style.visibility='hidden';
			me._enter_nextpano.ggVisible=false;
		}
		this._enter_nextpano.ggUpdatePosition=function (useTransition) {
		}
		this._hotspot_1.appendChild(this._enter_nextpano);
		this._next_pano=document.createElement('div');
		this._next_pano__img=document.createElement('img');
		this._next_pano__img.className='ggskin ggskin_svg';
		this._next_pano__img.setAttribute('src',basePath + 'images/next_pano.svg');
		this._next_pano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._next_pano__img['ondragstart']=function() { return false; };
		this._next_pano.appendChild(this._next_pano__img);
		this._next_pano.ggId="next_pano";
		this._next_pano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._next_pano.ggVisible=true;
		this._next_pano.className="ggskin ggskin_svg ";
		this._next_pano.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 62px;';
		hs+='left : -36px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._next_pano.setAttribute('style',hs);
		this._next_pano.style[domTransform + 'Origin']='50% 50%';
		me._next_pano.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._next_pano.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._next_pano.onmouseover=function (e) {
			me._next_pano.style[domTransition]='none';
			me._next_pano.style.visibility='hidden';
			me._next_pano.ggVisible=false;
		}
		this._next_pano.onmouseout=function (e) {
			me._enter_nextpano.style[domTransition]='none';
			me._enter_nextpano.style.visibility=(Number(me._enter_nextpano.style.opacity)>0||!me._enter_nextpano.style.opacity)?'inherit':'hidden';
			me._enter_nextpano.ggVisible=true;
		}
		this._next_pano.ggUpdatePosition=function (useTransition) {
		}
		this._hotspot_1.appendChild(this._next_pano);
		this._hstext=document.createElement('div');
		this._hstext__text=document.createElement('div');
		this._hstext.className='ggskin ggskin_textdiv';
		this._hstext.ggTextDiv=this._hstext__text;
		this._hstext.ggId="hstext";
		this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hstext.ggVisible=false;
		this._hstext.className="ggskin ggskin_text ";
		this._hstext.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		this._hstext.setAttribute('style',hs);
		this._hstext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 3px 1px 3px;';
		hs+='overflow: hidden;';
		this._hstext__text.setAttribute('style',hs);
		this._hstext__text.innerHTML=me.hotspot.title;
		this._hstext.appendChild(this._hstext__text);
		me._hstext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hstext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hstext.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((101-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._hotspot_1.appendChild(this._hstext);
		this.__div = this._hotspot_1;
	};
	this.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	this.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	this.addSkin();
};