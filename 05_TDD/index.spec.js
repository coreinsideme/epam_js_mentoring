describe('calculator should:', function() {

    it('add two simple numbers properly', function() {
        expect(calculate('2+1')).toEqual(3);
    });

    it('decrease first simple number with second properly', function() {
        expect(calculate('2-1')).toEqual(1);
    });

    it('multiply two simple numbers properly', function() {
        expect(calculate('3*4')).toEqual(12);
    });

    it('divide first simple number on second properly', function() {
        expect(calculate('12/4')).toEqual(3);
    });

    it('exponentiate simple number properly', function() {
        expect(calculate('^3')).toEqual(Math.exp(3));
    });

    it('should return right result despite on any number of spaces', function() {
        expect(calculate(' 11+   2-  3 *  5   ')).toEqual(-2);
    });

    it('should return NaN if silly statement passed', function() {
        expect(calculate(' + fwfw')).toEqual(NaN);
    });

    it('should return 0 if empty string passed', function() {
        expect(calculate('')).toEqual(0);
    });
})

