const test = require('ava')

const { geom3 } = require('../../geometries')

const retessellate = require('./retessellate')

const { comparePolygonsAsPoints } = require('../../../test/helpers')

test('geom3: retessellate() should create proper geometry from empty geometries', (t) => {
  const obj1 = geom3.create()

  // one empty geometry
  const ret1 = retessellate(obj1)
  const exp1 = {
    polygons: [],
    isRetesselated: true,
    transforms: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  }
  t.deepEqual(ret1, exp1)
})

test('geom3: retessellate() should create proper geometry from solid geometries', (t) => {
  const box1 = [
    [[-5.0, -5.0, -5.0], [-5.0, -5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 5.0, -5.0]],
    [[5.0, -5.0, -5.0], [5.0, 5.0, -5.0], [5.0, 5.0, 5.0], [5.0, -5.0, 5.0]],
    [[-5.0, -5.0, -5.0], [5.0, -5.0, -5.0], [5.0, -5.0, 5.0], [-5.0, -5.0, 5.0]],
    [[-5.0, 5.0, -5.0], [-5.0, 5.0, 5.0], [5.0, 5.0, 5.0], [5.0, 5.0, -5.0]],
    [[-5.0, -5.0, -5.0], [-5.0, 5.0, -5.0], [5.0, 5.0, -5.0], [5.0, -5.0, -5.0]],
    [[-5.0, -5.0, 5.0], [5.0, -5.0, 5.0], [5.0, 5.0, 5.0], [-5.0, 5.0, 5.0]]
  ]

  const box2 = [
    [[15.0, 15.0, 15.0], [15.0, 15.0, 25.0], [15.0, 25.0, 25.0], [15.0, 25.0, 15.0]],
    [[25.0, 15.0, 15.0], [25.0, 25.0, 15.0], [25.0, 25.0, 25.0], [25.0, 15.0, 25.0]],
    [[15.0, 15.0, 15.0], [25.0, 15.0, 15.0], [25.0, 15.0, 25.0], [15.0, 15.0, 25.0]],
    [[15.0, 25.0, 15.0], [15.0, 25.0, 25.0], [25.0, 25.0, 25.0], [25.0, 25.0, 15.0]],
    [[15.0, 15.0, 15.0], [15.0, 25.0, 15.0], [25.0, 25.0, 15.0], [25.0, 15.0, 15.0]],
    [[15.0, 15.0, 25.0], [25.0, 15.0, 25.0], [25.0, 25.0, 25.0], [15.0, 25.0, 25.0]]
  ]

  const box3 = [
    [[-5.0, -5.0, -5.0], [-5.0, -5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 5.0, -5.0]],
    [[5.0, -5.0, -5.0], [5.0, 5.0, -5.0], [5.0, 5.0, 5.0], [5.0, -5.0, 5.0]],
    [[-5.0, -5.0, -5.0], [5.0, -5.0, -5.0], [5.0, -5.0, 5.0], [-5.0, -5.0, 5.0]],
    [[-5.0, 5.0, -5.0], [-5.0, 5.0, 5.0], [5.0, 5.0, 5.0], [5.0, 5.0, -5.0]],
    [[-5.0, -5.0, -5.0], [-5.0, 5.0, -5.0], [5.0, 5.0, -5.0], [5.0, -5.0, -5.0]],
    [[-5.0, -5.0, 5.0], [-5.0, -5.0, 15.0], [-5.0, 5.0, 15.0], [-5.0, 5.0, 5.0]],
    [[5.0, -5.0, 5.0], [5.0, 5.0, 5.0], [5.0, 5.0, 15.0], [5.0, -5.0, 15.0]],
    [[-5.0, -5.0, 5.0], [5.0, -5.0, 5.0], [5.0, -5.0, 15.0], [-5.0, -5.0, 15.0]],
    [[-5.0, 5.0, 5.0], [-5.0, 5.0, 15.0], [5.0, 5.0, 15.0], [5.0, 5.0, 5.0]],
    [[-5.0, -5.0, 15.0], [5.0, -5.0, 15.0], [5.0, 5.0, 15.0], [-5.0, 5.0, 15.0]]
  ]

  const box4 = [
    [[-5.0, -5.0, -5.0], [-5.0, -5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 5.0, -5.0]],
    [[-5.0, -5.0, -5.0], [5.0, -5.0, -5.0], [5.0, -5.0, 5.0], [-5.0, -5.0, 5.0]],
    [[-5.0, -5.0, -5.0], [-5.0, 5.0, -5.0], [5.0, 5.0, -5.0], [5.0, -5.0, -5.0]],
    [[5.0, -5.0, -5.0], [5.0, 0.0, -5.0], [5.0, 0.0, 5.0], [5.0, -5.0, 5.0]],
    [[-5.0, 5.0, -5.0], [-5.0, 5.0, 5.0], [0.0, 5.0, 5.0], [0.0, 5.0, -5.0]],
    [[-5.0, -5.0, 5.0], [0.0, -5.0, 5.0], [0.0, 5.0, 5.0], [-5.0, 5.0, 5.0]],
    [[5.0, 0.0, -5.0], [5.0, 5.0, -5.0], [5.0, 5.0, 0.0], [5.0, 0.0, 0.0]],
    [[5.0, 5.0, 0.0], [5.0, 5.0, -5.0], [0.0, 5.0, -5.0], [0.0, 5.0, 0.0]],
    [[0.0, -5.0, 5.0], [5.0, -5.0, 5.0], [5.0, 0.0, 5.0], [0.0, 0.0, 5.0]],
    [[10.0, 0.0, 0.0], [10.0, 10.0, 0.0], [10.0, 10.0, 10.0], [10.0, 0.0, 10.0]],
    [[0.0, 10.0, 0.0], [0.0, 10.0, 10.0], [10.0, 10.0, 10.0], [10.0, 10.0, 0.0]],
    [[0.0, 0.0, 10.0], [10.0, 0.0, 10.0], [10.0, 10.0, 10.0], [0.0, 10.0, 10.0]],
    [[0.0, 5.0, 10.0], [0.0, 10.0, 10.0], [0.0, 10.0, 0.0], [0.0, 5.0, 0.0]],
    [[5.0, 0.0, 0.0], [10.0, 0.0, 0.0], [10.0, 0.0, 10.0], [5.0, 0.0, 10.0]],
    [[5.0, 10.0, 0.0], [10.0, 10.0, 0.0], [10.0, 0.0, 0.0], [5.0, 0.0, 0.0]],
    [[0.0, 0.0, 5.0], [0.0, 0.0, 10.0], [0.0, 5.0, 10.0], [0.0, 5.0, 5.0]],
    [[5.0, 0.0, 5.0], [5.0, 0.0, 10.0], [0.0, 0.0, 10.0], [0.0, 0.0, 5.0]],
    [[0.0, 5.0, 0.0], [0.0, 10.0, 0.0], [5.0, 10.0, 0.0], [5.0, 5.0, 0.0]]
  ]

  const box5 = [ // with coplanar polygons
    [[-5.0, -5.0, -5.0], [-5.0, -5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 5.0, -5.0]], // end
    [[10.0, -5.0, -5.0], [10.0, -5.0, 5.0], [-5.0, -5.0, 5.0], [-5.0, -5.0, -5.0]], // side
    [[10.0, 5.0, 5.0], [10.0, 5.0, -5.0], [-5.0, 5.0, -5.0], [-5.0, 5.0, 5.0]], // side
    [[10.0, 5.0, -5.0], [10.0, -5.0, -5.0], [-5.0, -5.0, -5.0], [-5.0, 5.0, -5.0]], // bottom
    [[10.0, -5.0, 5.0], [10.0, 0.0, 5.0], [-5.0, 0.0, 5.0], [-5.0, -5.0, 5.0]], // top
    [[10.0, 0.0, 5.0], [10.0, 5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 0.0, 5.0]], // top
    [[10.0, -5.0, -5.0], [10.0, 5.0, -5.0], [10.0, 5.0, 5.0], [10.0, -5.0, 5.0]] // end
  ]

  const obj1 = geom3.fromPoints(box1)
  const obj2 = geom3.fromPoints(box1.concat(box2)) // combined geometry
  const obj3 = geom3.fromPoints(box3)
  const obj4 = geom3.fromPoints(box4)
  const obj5 = geom3.fromPoints(box5)

  // one solid geometry
  const ret1 = retessellate(obj1)
  const pts1 = geom3.toPoints(ret1)
  const exp1 = [
    [[-5, -5, -5], [-5, -5, 5], [-5, 5, 5], [-5, 5, -5]],
    [[5, -5, -5], [5, 5, -5], [5, 5, 5], [5, -5, 5]],
    [[-5, -5, -5], [5, -5, -5], [5, -5, 5], [-5, -5, 5]],
    [[-5, 5, -5], [-5, 5, 5], [5, 5, 5], [5, 5, -5]],
    [[-5, -5, -5], [-5, 5, -5], [5, 5, -5], [5, -5, -5]],
    [[-5, -5, 5], [5, -5, 5], [5, 5, 5], [-5, 5, 5]]
  ]
  t.true(comparePolygonsAsPoints(pts1, exp1))

  // two non-overlapping geometries
  const ret2 = retessellate(obj2)
  const pts2 = geom3.toPoints(ret2)
  const exp2 = [
    [[-5, -5, -5], [-5, -5, 5], [-5, 5, 5], [-5, 5, -5]],
    [[5, -5, -5], [5, 5, -5], [5, 5, 5], [5, -5, 5]],
    [[-5, -5, -5], [5, -5, -5], [5, -5, 5], [-5, -5, 5]],
    [[-5, 5, -5], [-5, 5, 5], [5, 5, 5], [5, 5, -5]],
    [[-5, -5, -5], [-5, 5, -5], [5, 5, -5], [5, -5, -5]],
    [[-5, -5, 5], [5, -5, 5], [5, 5, 5], [-5, 5, 5]],
    [[15, 15, 15], [15, 15, 25], [15, 25, 25], [15, 25, 15]],
    [[25, 15, 15], [25, 25, 15], [25, 25, 25], [25, 15, 25]],
    [[15, 15, 15], [25, 15, 15], [25, 15, 25], [15, 15, 25]],
    [[15, 25, 15], [15, 25, 25], [25, 25, 25], [25, 25, 15]],
    [[15, 15, 15], [15, 25, 15], [25, 25, 15], [25, 15, 15]],
    [[15, 15, 25], [25, 15, 25], [25, 25, 25], [15, 25, 25]]
  ]
  t.true(comparePolygonsAsPoints(pts2, exp2))

  // two touching geometries (faces)
  const ret3 = retessellate(obj3)
  const pts3 = geom3.toPoints(ret3)
  const exp3 = [
    [[-5, 5, 15], [-5, 5, -5], [-5, -5, -5], [-5, -5, 15]],
    [[5, 5, -5], [5, 5, 15], [5, -5, 15], [5, -5, -5]],
    [[5, -5, -5], [5, -5, 15], [-5, -5, 15], [-5, -5, -5]],
    [[5, 5, 15], [5, 5, -5], [-5, 5, -5], [-5, 5, 15]],
    [[-5, -5, -5], [-5, 5, -5], [5, 5, -5], [5, -5, -5]],
    [[-5, -5, 15], [5, -5, 15], [5, 5, 15], [-5, 5, 15]]
  ]
  t.true(comparePolygonsAsPoints(pts3, exp3))

  // two overlapping geometries
  const ret4 = retessellate(obj4)
  const pts4 = geom3.toPoints(ret4)
  const exp4 = [
    [[-5, -5, -5], [-5, -5, 5], [-5, 5, 5], [-5, 5, -5]],
    [[-5, -5, -5], [5, -5, -5], [5, -5, 5], [-5, -5, 5]],
    [[-5, -5, -5], [-5, 5, -5], [5, 5, -5], [5, -5, -5]],
    [[5, 5, -5], [5, 5, 0], [5, -5, 0], [5, -5, -5]],
    [[5, 0, 0], [5, 0, 5], [5, -5, 5], [5, -5, 0]],
    [[0, 5, 5], [0, 5, 0], [-5, 5, 0], [-5, 5, 5]],
    [[5, 5, 0], [5, 5, -5], [-5, 5, -5], [-5, 5, 0]],
    [[5, -5, 5], [5, 0, 5], [-5, 0, 5], [-5, -5, 5]],
    [[0, 0, 5], [0, 5, 5], [-5, 5, 5], [-5, 0, 5]],
    [[10, 0, 0], [10, 10, 0], [10, 10, 10], [10, 0, 10]],
    [[0, 10, 0], [0, 10, 10], [10, 10, 10], [10, 10, 0]],
    [[0, 0, 10], [10, 0, 10], [10, 10, 10], [0, 10, 10]],
    [[0, 10, 10], [0, 10, 5], [0, 0, 5], [0, 0, 10]],
    [[0, 10, 5], [0, 10, 0], [0, 5, 0], [0, 5, 5]],
    [[10, 0, 0], [10, 0, 5], [5, 0, 5], [5, 0, 0]],
    [[10, 0, 5], [10, 0, 10], [0, 0, 10], [0, 0, 5]],
    [[10, 10, 0], [10, 5, 0], [0, 5, 0], [0, 10, 0]],
    [[10, 5, 0], [10, 0, 0], [5, 0, 0], [5, 5, 0]]
  ]
  t.true(comparePolygonsAsPoints(pts4, exp4))

  // coplanar polygons
  const ret5 = retessellate(obj5)
  const pts5 = geom3.toPoints(ret5)
  const exp5 = [
    [[-5.0, -5.0, -5.0], [-5.0, -5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, 5.0, -5.0]],
    [[10.0, -5.0, -5.0], [10.0, -5.0, 5.0], [-5.0, -5.0, 5.0], [-5.0, -5.0, -5.0]],
    [[10.0, 5.0, 5.0], [10.0, 5.0, -5.0], [-5.0, 5.0, -5.0], [-5.0, 5.0, 5.0]],
    [[10.0, 5.0, -5.0], [10.0, -5.0, -5.0], [-5.0, -5.0, -5.0], [-5.0, 5.0, -5.0]],
    [[10.0, -5.0, 5.0], [10.0, 5.0, 5.0], [-5.0, 5.0, 5.0], [-5.0, -5.0, 5.0]],
    [[10.0, -5.0, -5.0], [10.0, 5.0, -5.0], [10.0, 5.0, 5.0], [10.0, -5.0, 5.0]]
  ]
  t.true(comparePolygonsAsPoints(pts5, exp5))
})
