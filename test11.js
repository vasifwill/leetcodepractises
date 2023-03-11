let version1="2.10.0.1"
let version2="2.1.0.10"
function VersionCompare( version1, version2){
    var regExStrip0 = /(\.0+)+$/;
    var segmentsA = version1.replace(regExStrip0, '').split('.');
    var segmentsB = version2.replace(regExStrip0, '').split('.');
    console.log(segmentsA)

    if(segmentsA > segmentsB){
        return 1
    }else if (segmentsA< segmentsB){
        return -1
    }else{
        return 0
    }
    
}


console.log(VersionCompare(version1, version2))

var i, diff;
    var regExStrip0 = /(\.0+)+$/;
    var segmentsA = version1.replace(regExStrip0, '').split('.');
    var segmentsB = version2.replace(regExStrip0, '').split('.');
    var l = Math.min(segmentsA.length, segmentsB.length);

    for (i = 0; i < l; i++) {
    diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i],10);
        if (diff) {
            return diff;
        }
    }
    return segmentsA.length - segmentsB.length;