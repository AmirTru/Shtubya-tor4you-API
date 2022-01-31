//studios key 
const KEY_theDiamond = "72230";
const KEY_flyingSquares = "76774";
const KEY_phaseZero = "79999";
const KEY_molecule = "68503";
const KEY_darkMode = "70715";
const KEY_goldenRatio = "68266";
const KEY_purpleHaze = "71636";
const KEY_valhallaLounge = "80684";
const KEY_zebra = "68244";

// new day obj for api req
var toDay = new Date(); 

//get current time in YYYYMMDDHH
var dt = GetCurrentTimeYYYYMMDDHH(toDay);

//tor4u secret key
const key = "MLggjSx6IfNHNLxdNyUjrzGGIRTfdRrM";

//shtubya site id
const siteid = "5442"

//tor4you secret api 
const apiSecret = "Uz2t5tfrIRcks0Ar76We89f7IH715Gx"

//random time for testing in YYYYMMDD---------- from 2021/11/08 to 2021/11/09
var toDay_YYYYMMDD = GetCurrentTimeYYYYMMDD(toDay);
var Tomorrow_YYYYMMDD = GetTomorrowTimeYYYYMMDD(toDay);

//define a func to get studios info
const GetData = (fromTime, toTime) => {
    //getting all the nececerise url var

    //get all info to SHA256

    //until 30.1 it was this key for hash
    //var keyForSh = "siteid=" + siteid + "&key=" + key + "&dt=" + dt + "&from=" + fromTime + "&to=" + toTime + apiSecret;
    var keyForSh = siteid + key + dt + "apptlist" + apiSecret;

    //hash it 
    var sh = SHA256(keyForSh);

    //complete url 
    var url = "https://www.tor4you.co.il/api/apptlist?siteid=" + 
        siteid + "&key=" + key +  // key's
        "&dt=" + dt + "&from=" + fromTime + "&to=" + toTime + //this Time + appointment Time 
        "&sh=" + sh; // hash code's

    //Create a request variable and assign a new XMLHttpRequest object to it
    const request = new XMLHttpRequest();

    //open a GET req 
    request.open("GET", url);
    
    //When the 'API request loads, do the following...
    request.onload = () => {

        //convert request to obj 
        const data = JSON.parse(request.response);

        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
        if (request.status >= 200 && request.status < 400) {

            // check with tor4you Status 1 = Success. Status 2 = Problem 
            if (data.status == 1){
                
                //get shifts time according to tor4you
                const morningShift = fromTime + "0500" //stends for 05:00
                const eveningShift = fromTime + "1700" //stends for 17:00

                //show data
                //console.log(data);

                //show me the date
                console.log("\n"+fromTime);

                //iterate 
                data.appts.forEach(function(index) {
                         
                    //chcking in which studio we are (studios are stuff in tor4you)
                    switch (index.staff){
                        case KEY_theDiamond:
                                if (index.from == morningShift){
                                    console.log("KEY_theDiamond" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_theDiamond" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_flyingSquares:
                                if (index.from == morningShift){
                                    console.log("KEY_flyingSquares" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_flyingSquares" + " משמרת ערב תפוסה");
                                }
                            break;        
                        case KEY_phaseZero:
                                if (index.from == morningShift){
                                    console.log("KEY_phaseZero" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_phaseZero" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_molecule:
                                if (index.from == morningShift){
                                    console.log("KEY_molecule" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_molecule" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_darkMode:
                                if (index.from == morningShift){
                                    console.log("KEY_darkMode" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_darkMode" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_goldenRatio:
                                if (index.from == morningShift){
                                    console.log("KEY_goldenRatio" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_goldenRatio" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_purpleHaze:
                                if (index.from == morningShift){
                                    console.log("KEY_purpleHaze" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_purpleHaze" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_valhallaLounge:
                                if (index.from == morningShift){
                                    console.log("KEY_valhallaLounge" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_valhallaLounge" + " משמרת ערב תפוסה");
                                }
                            break;
                        case KEY_zebra:
                                if (index.from == morningShift){
                                    console.log("KEY_zebra" + " משמרת בוקר תפוסה");
                                }
                                if (index.from == eveningShift){
                                    console.log("KEY_zebra" + " משמרת ערב תפוסה");
                                }
                        break;
                    }   
            });
            }else{
                //TODO: פה אני מעלים את הכפתורים של פנוי/לא פנוי
                //if not Success show messege
                console.log(data.message);
            }
          
        }else{
            //TODO: פה אני מעלים את הכפתורים של פנוי/לא פנוי
            console.log("Api error (not in tor4you)");  
        }
        
    };
    //send request
    request.send();
};
//get data
GetData(toDay_YYYYMMDD, Tomorrow_YYYYMMDD);

//-----------------------------------------------------------------------------------------------------------------------------------------

function GetCurrentTimeYYYYMMDDHH(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

        if (month < 10) {
                month = "0" + month;
        }
    
    var day = today.getDate();

          if (day < 10) {
                day = "0" + day;
        }

    var hour = today.getHours();

            if (hour < 10) {
                hour = "0" + hour;
        }

    var minute = today.getMinutes(); 

            if (minute < 10) {
                minute = "0" + minute;
        }       

            
    var currentTime = year + "" + month + "" + day + "" + hour + "" + minute;

    return currentTime;
}

function GetCurrentTimeYYYYMMDD(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

        if (month < 10) {
                month = "0" + month;
        }
    
    var day = today.getDate();

          if (day < 10) {
                day = "0" + day;
        }

    var hour = today.getHours();

            if (hour < 10) {
                hour = "0" + hour;
        }
            
    var currentTime = year + "" + month + "" + day;

    return currentTime;
}

function GetTomorrowTimeYYYYMMDD(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

        if (month < 10) {
                month = "0" + month;
        }
    
    var day = today.getDate() + 1;

          if (day < 10) {
                day = "0" + day;
        }

    var hour = today.getHours();

            if (hour < 10) {
                hour = "0" + hour;
        }
            
    var currentTime = year + "" + month + "" + day;

    return currentTime;
}


/**
* Secure Hash Algorithm (SHA256)
* http://www.webtoolkit.info/
* Original code by Angel Marin, Paul Johnston
**/
function SHA256(s){
    var chrsz = 8;
    var hexcase = 0;
   
    function safe_add (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
    }
   
    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
   
    function core_sha256 (m, l) {
    var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
    var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
   
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
   
    for ( var i = 0; i<m.length; i+=16 ) {
    a = HASH[0];
    b = HASH[1];
    c = HASH[2];
    d = HASH[3];
    e = HASH[4];
    f = HASH[5];
    g = HASH[6];
    h = HASH[7];
   
    for ( var j = 0; j<64; j++) {
    if (j < 16) W[j] = m[j + i];
    else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
   
    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
    T2 = safe_add(Sigma0256(a), Maj(a, b, c));
   
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
    }
   
    HASH[0] = safe_add(a, HASH[0]);
    HASH[1] = safe_add(b, HASH[1]);
    HASH[2] = safe_add(c, HASH[2]);
    HASH[3] = safe_add(d, HASH[3]);
    HASH[4] = safe_add(e, HASH[4]);
    HASH[5] = safe_add(f, HASH[5]);
    HASH[6] = safe_add(g, HASH[6]);
    HASH[7] = safe_add(h, HASH[7]);
    }
    return HASH;
    }
   
    function str2binb (str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for(var i = 0; i < str.length * chrsz; i += chrsz) {
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
    }
    return bin;
    }
   
    function Utf8Encode(string) {
    string = string.replace(/\r\n/g,'\n');
    var utftext = '';
   
    for (var n = 0; n < string.length; n++) {
   
    var c = string.charCodeAt(n);
   
    if (c < 128) {
    utftext += String.fromCharCode(c);
    }
    else if((c > 127) && (c < 2048)) {
    utftext += String.fromCharCode((c >> 6) | 192);
    utftext += String.fromCharCode((c & 63) | 128);
    }
    else {
    utftext += String.fromCharCode((c >> 12) | 224);
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
    utftext += String.fromCharCode((c & 63) | 128);
    }
   
    }
   
    return utftext;
    }
   
    function binb2hex (binarray) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    var str = '';
    for(var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8+4)) & 0xF) +
    hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8 )) & 0xF);
    }
    return str;
    }
   
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
