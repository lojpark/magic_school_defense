function denum( num, figure ){
	figure = Math.pow( 10, figure );
	return Math.floor( num * figure ) / figure;
};