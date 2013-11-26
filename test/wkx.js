var Geometry = require('../geometry');

var testData = require('./testdata');

var assert = require('assert');

describe('wkx', function () {
    describe('Geometry', function () {
        it('parse()', function () {
            assert.deepEqual(Geometry.parse(new Buffer(testData.point.wkb, 'hex')), testData.point.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyLineString.wkb, 'hex')), testData.emptyLineString.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.lineString.wkb, 'hex')), testData.lineString.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyPolygon.wkb, 'hex')), testData.emptyPolygon.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.polygon.wkb, 'hex')), testData.polygon.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.polygonWithOneInteriorRing.wkb, 'hex')), testData.polygonWithOneInteriorRing.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.polygonWithTwoInteriorRings.wkb, 'hex')), testData.polygonWithTwoInteriorRings.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyMultiPoint.wkb, 'hex')), testData.emptyMultiPoint.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiPointWithOnePoint.wkb, 'hex')), testData.multiPointWithOnePoint.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiPointWithTwoPoints.wkb, 'hex')), testData.multiPointWithTwoPoints.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyMultiLineString.wkb, 'hex')), testData.emptyMultiLineString.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiLineStringWithOneLineString.wkb, 'hex')), testData.multiLineStringWithOneLineString.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiLineStringWithTwoLineStrings.wkb, 'hex')), testData.multiLineStringWithTwoLineStrings.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyMultiPolygon.wkb, 'hex')), testData.emptyMultiPolygon.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiPolygonWithOnePolygon.wkb, 'hex')), testData.multiPolygonWithOnePolygon.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.multiPolygonWithTwoPolygons.wkb, 'hex')), testData.multiPolygonWithTwoPolygons.geometry);

            assert.deepEqual(Geometry.parse(new Buffer(testData.emptyGeometryCollection.wkb, 'hex')), testData.emptyGeometryCollection.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.geometryCollectionWithPoint.wkb, 'hex')), testData.geometryCollectionWithPoint.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.geometryCollectionWithPointAndLineString.wkb, 'hex')), testData.geometryCollectionWithPointAndLineString.geometry);
            assert.deepEqual(Geometry.parse(new Buffer(testData.geometryCollectionWithPointAndLineStringAndPolygon.wkb, 'hex')), testData.geometryCollectionWithPointAndLineStringAndPolygon.geometry);
        });
    });
	describe('Point', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyPoint.geometry.toWkt(), testData.emptyPoint.wkt);
            assert.equal(testData.point.geometry.toWkt(), testData.point.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyPoint.geometry.toWkb().toString('hex'), testData.emptyPoint.wkb);
            assert.equal(testData.point.geometry.toWkb().toString('hex'), testData.point.wkb);
		});
	});
    describe('LineString', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyLineString.geometry.toWkt(), testData.emptyLineString.wkt);
            assert.equal(testData.lineString.geometry.toWkt(), testData.lineString.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyLineString.geometry.toWkb().toString('hex'), testData.emptyLineString.wkb);
            assert.equal(testData.lineString.geometry.toWkb().toString('hex'), testData.lineString.wkb);
		});
	});
    describe('Polygon', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyPolygon.geometry.toWkt(), testData.emptyPolygon.wkt);
            assert.equal(testData.polygon.geometry.toWkt(), testData.polygon.wkt);
            assert.equal(testData.polygonWithOneInteriorRing.geometry.toWkt(), testData.polygonWithOneInteriorRing.wkt);
            assert.equal(testData.polygonWithTwoInteriorRings.geometry.toWkt(), testData.polygonWithTwoInteriorRings.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyPolygon.geometry.toWkb().toString('hex'), testData.emptyPolygon.wkb);
            assert.equal(testData.polygon.geometry.toWkb().toString('hex'), testData.polygon.wkb);
            assert.equal(testData.polygonWithOneInteriorRing.geometry.toWkb().toString('hex'), testData.polygonWithOneInteriorRing.wkb);
            assert.equal(testData.polygonWithTwoInteriorRings.geometry.toWkb().toString('hex'), testData.polygonWithTwoInteriorRings.wkb);
		});
	});
    describe('MultiPoint', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyMultiPoint.geometry.toWkt(), testData.emptyMultiPoint.wkt);
            assert.equal(testData.multiPointWithOnePoint.geometry.toWkt(), testData.multiPointWithOnePoint.wkt);
            assert.equal(testData.multiPointWithTwoPoints.geometry.toWkt(), testData.multiPointWithTwoPoints.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyMultiPoint.geometry.toWkb().toString('hex'), testData.emptyMultiPoint.wkb);
            assert.equal(testData.multiPointWithOnePoint.geometry.toWkb().toString('hex'), testData.multiPointWithOnePoint.wkb);
            assert.equal(testData.multiPointWithTwoPoints.geometry.toWkb().toString('hex'), testData.multiPointWithTwoPoints.wkb);
		});
	});
    describe('MultiLineString', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyMultiLineString.geometry.toWkt(), testData.emptyMultiLineString.wkt);
            assert.equal(testData.multiLineStringWithOneLineString.geometry.toWkt(), testData.multiLineStringWithOneLineString.wkt);
            assert.equal(testData.multiLineStringWithTwoLineStrings.geometry.toWkt(), testData.multiLineStringWithTwoLineStrings.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyMultiLineString.geometry.toWkb().toString('hex'), testData.emptyMultiLineString.wkb);
            assert.equal(testData.multiLineStringWithOneLineString.geometry.toWkb().toString('hex'), testData.multiLineStringWithOneLineString.wkb);
            assert.equal(testData.multiLineStringWithTwoLineStrings.geometry.toWkb().toString('hex'), testData.multiLineStringWithTwoLineStrings.wkb);
		});
	});
    describe('MultiPolygon', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyMultiPolygon.geometry.toWkt(), testData.emptyMultiPolygon.wkt);
            assert.equal(testData.multiPolygonWithOnePolygon.geometry.toWkt(), testData.multiPolygonWithOnePolygon.wkt);
            assert.equal(testData.multiPolygonWithTwoPolygons.geometry.toWkt(), testData.multiPolygonWithTwoPolygons.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyMultiPolygon.geometry.toWkb().toString('hex'), testData.emptyMultiPolygon.wkb);
            assert.equal(testData.multiPolygonWithOnePolygon.geometry.toWkb().toString('hex'), testData.multiPolygonWithOnePolygon.wkb);
            assert.equal(testData.multiPolygonWithTwoPolygons.geometry.toWkb().toString('hex'), testData.multiPolygonWithTwoPolygons.wkb);
		});
	});
    describe('GeometryCollection', function () {
		it('toWkt()', function () {
            assert.equal(testData.emptyGeometryCollection.geometry.toWkt(), testData.emptyGeometryCollection.wkt);
            assert.equal(testData.geometryCollectionWithPoint.geometry.toWkt(), testData.geometryCollectionWithPoint.wkt);
            assert.equal(testData.geometryCollectionWithPointAndLineString.geometry.toWkt(), testData.geometryCollectionWithPointAndLineString.wkt);
            assert.equal(testData.geometryCollectionWithPointAndLineStringAndPolygon.geometry.toWkt(), testData.geometryCollectionWithPointAndLineStringAndPolygon.wkt);
		});
        it('toWkb()', function () {
            assert.equal(testData.emptyGeometryCollection.geometry.toWkb().toString('hex'), testData.emptyGeometryCollection.wkb);
            assert.equal(testData.geometryCollectionWithPoint.geometry.toWkb().toString('hex'), testData.geometryCollectionWithPoint.wkb);
            assert.equal(testData.geometryCollectionWithPointAndLineString.geometry.toWkb().toString('hex'), testData.geometryCollectionWithPointAndLineString.wkb);
            assert.equal(testData.geometryCollectionWithPointAndLineStringAndPolygon.geometry.toWkb().toString('hex'), testData.geometryCollectionWithPointAndLineStringAndPolygon.wkb);
		});
	});
});