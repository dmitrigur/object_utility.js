	function isEmptyObject(obj) {
		if (!CheckObject(obj))
			return undefined;
		else
			for (var i in obj) return false;
		return true;
	};
	function CheckObject() {  //1 - root, 2 - address, 3 -value to compare
		if (arguments[0]==null) {
			var root=window;
		} else if (arguments[0]===undefined) 
			return false
		else {
			var root=arguments[0];
		};
		if (arguments[1]!=null)
			for (var i=0;i<arguments[1].length;i++)
				if (arguments[1][i]===undefined || root[arguments[1][i]]===undefined)
					return false;
				else
					root=root[arguments[1][i]];
		if (arguments.length==3 && ((typeof(arguments[2])=='object' && JSON.stringify(arguments[2])!=JSON.stringify(root)) || arguments[2]!=root))
			return false;
		return true;
	};
	function ReturnObjectValue() { //1 - root, 2 - address
		if (arguments[0]==null) {
			var root=window;
		} else if (arguments[0]===undefined) 
			return false
		else {
			var root=arguments[0];
		};
		for (var i=0;i<arguments[1].length;i++)
			if (arguments[1][i]===undefined || typeof(root)!='object' || root[arguments[1][i]]===undefined)
					return undefined;
				else
					root=root[arguments[1][i]];
		return root
	};
	function PutObjectValue(a,value,ruler,flag,level) { //1 - a, 2 value, ruler defines if object or array, flag==true || ruler==true if need to push or false to unshift
		function record () {
			if (typeof(ruler)=='boolean' || typeof(flag)=='boolean') {
				if (typeof(ruler)=='boolean') flag=ruler;
				if (flag) 
					switch (a.length) {
						case 1 : window[a[0]].push(value);break;
						case 2 : window[a[0]][a[1]].push(value);break;
						case 3 : window[a[0]][a[1]][a[2]].push(value);break;
						case 4 : window[a[0]][a[1]][a[2]][a[3]].push(value);break;
						case 5 : window[a[0]][a[1]][a[2]][a[3]][a[4]].push(value);break;
						case 6 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]].push(value);break;
						case 7 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]].push(value);break;
						case 8 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]].push(value);break;
						case 9 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]].push(value);break;
						case 10 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]].push(value);break;
						case 11 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]].push(value);break;
						case 12 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]].push(value);break;
						case 13 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]].push(value);break;
						case 14 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]].push(value);break;
						case 15 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]][a[14]].push(value);break;
					}
				else 
					switch (a.length) {
						case 1 : window[a[0]].unshift(value);break;
						case 2 : window[a[0]][a[1]].unshift(value);break;
						case 3 : window[a[0]][a[1]][a[2]].unshift(value);break;
						case 4 : window[a[0]][a[1]][a[2]][a[3]].unshift(value);break;
						case 5 : window[a[0]][a[1]][a[2]][a[3]][a[4]].unshift(value);break;
						case 6 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]].unshift(value);break;
						case 7 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]].unshift(value);break;
						case 8 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]].unshift(value);break;
						case 9 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]].unshift(value);break;
						case 10 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]].unshift(value);break;
						case 11 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]].unshift(value);break;
						case 12 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]].unshift(value);break;
						case 13 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]].unshift(value);break;
						case 14 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]].unshift(value);break;
						case 15 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]][a[14]].unshift(value);break;
					}
			} else
				switch (a.length) {
					case 1 : window[a[0]]=value;break;
					case 2 : window[a[0]][a[1]]=value;break;
					case 3 : window[a[0]][a[1]][a[2]]=value;break;
					case 4 : window[a[0]][a[1]][a[2]][a[3]]=value;break;
					case 5 : window[a[0]][a[1]][a[2]][a[3]][a[4]]=value;break;
					case 6 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]]=value;break;
					case 7 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]]=value;break;
					case 8 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]]=value;break;
					case 9 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]]=value;break;
					case 10 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]]=value;break;
					case 11 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]]=value;break;
					case 12 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]]=value;break;
					case 13 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]]=value;break;
					case 14 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]]=value;break;
					case 15 : window[a[0]][a[1]][a[2]][a[3]][a[4]][a[5]][a[6]][a[7]][a[8]][a[9]][a[10]][a[11]][a[12]][a[13]][a[14]]=value;break;
				}
		};
		try { 
			record ();
		}
		catch(e) {
			if (ruler!==undefined && typeof(ruler)!='boolean') PutObjectValue(a.slice(0,a.length-1),(ruler[a.length-1]==0)?[]:{},ruler.slice(0,a.length-1));
			else if (typeof(ruler)=='boolean' || level==undefined) PutObjectValue(a,[],undefined,undefined,0);
			else PutObjectValue(a.slice(0,a.length-1),{},undefined,undefined);
			record ()
		}
	};
