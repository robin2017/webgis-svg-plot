//1x3 * 3x3 = 1x3
function calc13_33(A, B) {
    if (A.length !== 3 || B.length !== 9) {
        throw new Error("输入参数长度出错")
    }
    let ret = [0, 0, 0];
    ret[0] = A[0] * B[0] + A[1] * B[3] + A[2] * B[6];
    ret[1] = A[0] * B[1] + A[1] * B[4] + A[2] * B[7];
    ret[2] = A[0] * B[2] + A[1] * B[5] + A[2] * B[8];
    return ret;
}

//3x3 * 3x3 = 3x3
function calc33_33(A, B) {
    if (A.length !== 9 || B.length !== 9) {
        throw new Error("输入参数长度出错")
    }
    let ret = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    ret[0] = A[0] * B[0] + A[1] * B[3] + A[2] * B[6];
    ret[1] = A[0] * B[1] + A[1] * B[4] + A[2] * B[7];
    ret[2] = A[0] * B[2] + A[1] * B[5] + A[2] * B[8];
    ret[3] = A[3] * B[0] + A[4] * B[3] + A[5] * B[6];
    ret[4] = A[3] * B[1] + A[4] * B[4] + A[5] * B[7];
    ret[5] = A[3] * B[2] + A[4] * B[5] + A[5] * B[8];
    ret[6] = A[6] * B[0] + A[7] * B[3] + A[8] * B[6];
    ret[7] = A[6] * B[1] + A[7] * B[4] + A[8] * B[7];
    ret[8] = A[6] * B[2] + A[7] * B[5] + A[8] * B[8];
    return ret;
}


function calcInverse(A) {
    if (A.length !== 9) {
        throw new Error("输入参数长度出错")
    }
    //1x9 ==> 3x3
    let a = [[A[0], A[1], A[2]], [A[3], A[4], A[5]], [A[6], A[7], A[8]]];
    let ret = inverse(a);
    return [ret[0][0], ret[0][1], ret[0][2],
        ret[1][0], ret[1][1], ret[1][2],
        ret[2][0], ret[2][1], ret[2][2]]

}

// 求逆矩阵
function inverse(matrix) {
    if (determinant(matrix) === 0) {
        return false;
    }

    // 求代数余子式
    function cofactor(matrix, row, col) {
        var order = matrix.length,
            new_matrix = [],
            _row, _col;
        for (var i = 0; i < order - 1; i++) {
            new_matrix[i] = [];
            _row = i < row ? i : i + 1;
            for (var j = 0; j < order - 1; j++) {
                _col = j < col ? j : j + 1;
                new_matrix[i][j] = matrix[_row][_col];
            }
        }
        return Math.pow(-1, row + col) * determinant(new_matrix);
    }

    var order = matrix.length,
        adjoint = [];
    for (var i = 0; i < order; i++) {
        adjoint[i] = [];
        for (var j = 0; j < order; j++) {
            adjoint[i][j] = cofactor(matrix, j, i);
        }
    }
    return scalarMultiply(1 / determinant(matrix), adjoint);
}

// 求行列式
function determinant(matrix) {
    var order = matrix.length, cofactor, result = 0;
    if (order == 1) {
        return matrix[0][0];
    }
    for (var i = 0; i < order; i++) {
        cofactor = [];
        for (var j = 0; j < order - 1; j++) {
            cofactor[j] = [];
            for (var k = 0; k < order - 1; k++) {
                cofactor[j][k] = matrix[j + 1][k < i ? k : k + 1];
            }
        }
        result += matrix[0][i] * Math.pow(-1, i) * determinant(cofactor);
    }
    return result;
}

// 矩阵数乘
function scalarMultiply(num, matrix) {
    var row = matrix.length,
        col = matrix[0].length,
        result = [];
    for (var i = 0; i < row; i++) {
        result[i] = [];
        for (var j = 0; j < col; j++) {
            result[i][j] = num * matrix[i][j];
        }
    }
    return result;
}

// 矩阵转置
function transpose(matrix) {
    var row = matrix.length,
        col = matrix[0].length,
        result = [];
    for (var i = 0; i < col; i++) {
        result[i] = [];
        for (var j = 0; j < row; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}

// 矢量内积
function dotProduct(vector1, vector2) {
    var n = Math.min(vector1.length, vector2.length),
        result = 0;
    for (var i = 0; i < n; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}

// 矩阵乘法
function multiply(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        return false;
    }
    var row = matrix1.length,
        col = matrix2[0].length,
        matrix2_t = transpose(matrix2);
    result = [];
    for (var i = 0; i < row; i++) {
        result[i] = [];
        for (var j = 0; j < col; j++) {
            result[i][j] = dotProduct(matrix1[i], matrix2_t[j]);
        }
    }
    return result;
}

