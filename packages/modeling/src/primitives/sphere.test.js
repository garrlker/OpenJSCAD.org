const test = require('ava')

const geom3 = require('../geometry/geom3')

const {sphere} = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('sphere (defaults)', t => {
  const obs = sphere()
  const pts = geom3.toPoints(obs)
  const exp = [
    [[1, 0, 0], [0.8660253882408142, -0.5, 0], [0.75, -0.4330126941204071, -0.5], [0.8660253882408142, 0, -0.5] ],
    [[0.8660253882408142, 0, 0.5], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, -0.5, 0], [1, 0, 0] ],
    [[0.8660253882408142, 0, -0.5], [0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.25, -0.8660253882408142], [0.5, 0, -0.8660253882408142] ],
    [[0.5, 0, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, 0, 0.5] ],
    [[0.5, 0, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142], [6.123234262925839e-17, 0, -1] ],
    [[6.123234262925839e-17, 0, 1], [0.4330126941204071, -0.25, 0.8660253882408142], [0.5, 0, 0.8660253882408142] ],
    [[0.8660253882408142, -0.5, 0], [0.5, -0.8660253882408142, 0], [0.4330126941204071, -0.75, -0.5], [0.75, -0.4330126941204071, -0.5] ],
    [[0.75, -0.4330126941204071, 0.5], [0.4330126941204071, -0.75, 0.5], [0.5, -0.8660253882408142, 0], [0.8660253882408142, -0.5, 0] ],
    [[0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.75, -0.5], [0.25, -0.4330126941204071, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142] ],
    [[0.4330126941204071, -0.25, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.75, 0.5], [0.75, -0.4330126941204071, 0.5] ],
    [[0.4330126941204071, -0.25, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142], [5.302876236065149e-17, -3.0616171314629196e-17, -1] ],
    [[5.302876236065149e-17, -3.0616171314629196e-17, 1], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142] ],
    [[0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0], [5.302876566937394e-17, -0.8660253882408142, -0.5], [0.4330126941204071, -0.75, -0.5] ],
    [[0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5], [6.123234262925839e-17, -1, 0], [0.5, -0.8660253882408142, 0] ],
    [[0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142] ],
    [[0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [5.302876566937394e-17, -0.8660253882408142, 0.5], [0.4330126941204071, -0.75, 0.5] ],
    [[0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [3.0616171314629196e-17, -5.302876236065149e-17, -1] ],
    [[3.0616171314629196e-17, -5.302876236065149e-17, 1], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142] ],
    [[6.123234262925839e-17, -1, 0], [-0.5, -0.8660253882408142, 0], [-0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5] ],
    [[5.302876566937394e-17, -0.8660253882408142, 0.5], [-0.4330126941204071, -0.75, 0.5], [-0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0] ],
    [[5.302876566937394e-17, -0.8660253882408142, -0.5], [-0.4330126941204071, -0.75, -0.5], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142] ],
    [[3.0616171314629196e-17, -0.5, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5] ],
    [[3.0616171314629196e-17, -0.5, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.74939976039497e-33, -6.123234262925839e-17, -1] ],
    [[3.74939976039497e-33, -6.123234262925839e-17, 1], [-0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142] ],
    [[-0.5, -0.8660253882408142, 0], [-0.8660253882408142, -0.5, 0], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.75, -0.5] ],
    [[-0.4330126941204071, -0.75, 0.5], [-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -0.5, 0], [-0.5, -0.8660253882408142, 0] ],
    [[-0.4330126941204071, -0.75, -0.5], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.25, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142] ],
    [[-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.75, -0.4330126941204071, 0.5], [-0.4330126941204071, -0.75, 0.5] ],
    [[-0.25, -0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142], [-3.0616171314629196e-17, -5.302876236065149e-17, -1] ],
    [[-3.0616171314629196e-17, -5.302876236065149e-17, 1], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142] ],
    [[-0.8660253882408142, -0.5, 0], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, -0.4330126941204071, -0.5] ],
    [[-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -0.5, 0] ],
    [[-0.75, -0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142] ],
    [[-0.4330126941204071, -0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, -0.4330126941204071, 0.5] ],
    [[-0.4330126941204071, -0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-5.302876236065149e-17, -3.0616171314629196e-17, -1] ],
    [[-5.302876236065149e-17, -3.0616171314629196e-17, 1], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142] ],
    [[-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, 0.5, 0], [-0.75, 0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5] ],
    [[-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, 0.5, 0], [-1, -1.2246468525851679e-16, 0] ],
    [[-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142] ],
    [[-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5] ],
    [[-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142], [-6.123234262925839e-17, -7.49879952078994e-33, -1] ],
    [[-6.123234262925839e-17, -7.49879952078994e-33, 1], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142] ],
    [[-0.8660253882408142, 0.5, 0], [-0.5, 0.8660253882408142, 0], [-0.4330126941204071, 0.75, -0.5], [-0.75, 0.4330126941204071, -0.5] ],
    [[-0.75, 0.4330126941204071, 0.5], [-0.4330126941204071, 0.75, 0.5], [-0.5, 0.8660253882408142, 0], [-0.8660253882408142, 0.5, 0] ],
    [[-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.75, -0.5], [-0.25, 0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142] ],
    [[-0.4330126941204071, 0.25, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.75, 0.5], [-0.75, 0.4330126941204071, 0.5] ],
    [[-0.4330126941204071, 0.25, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142], [-5.302876236065149e-17, 3.0616171314629196e-17, -1] ],
    [[-5.302876236065149e-17, 3.0616171314629196e-17, 1], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142] ],
    [[-0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-0.4330126941204071, 0.75, -0.5] ],
    [[-0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-1.8369701465288538e-16, 1, 0], [-0.5, 0.8660253882408142, 0] ],
    [[-0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142] ],
    [[-0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-0.4330126941204071, 0.75, 0.5] ],
    [[-0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-3.0616171314629196e-17, 5.302876236065149e-17, -1] ],
    [[-3.0616171314629196e-17, 5.302876236065149e-17, 1], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142] ],
    [[-1.8369701465288538e-16, 1, 0], [0.5, 0.8660253882408142, 0], [0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5] ],
    [[-1.5908628708195447e-16, 0.8660253882408142, 0.5], [0.4330126941204071, 0.75, 0.5], [0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0] ],
    [[-1.5908628708195447e-16, 0.8660253882408142, -0.5], [0.4330126941204071, 0.75, -0.5], [0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142] ],
    [[-9.184850732644269e-17, 0.5, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5] ],
    [[-9.184850732644269e-17, 0.5, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142], [-1.1248198179158957e-32, 6.123234262925839e-17, -1] ],
    [[-1.1248198179158957e-32, 6.123234262925839e-17, 1], [0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142] ],
    [[0.5, 0.8660253882408142, 0], [0.8660253882408142, 0.5, 0], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.75, -0.5] ],
    [[0.4330126941204071, 0.75, 0.5], [0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 0.5, 0], [0.5, 0.8660253882408142, 0] ],
    [[0.4330126941204071, 0.75, -0.5], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.25, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142] ],
    [[0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142], [0.75, 0.4330126941204071, 0.5], [0.4330126941204071, 0.75, 0.5] ],
    [[0.25, 0.4330126941204071, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142], [3.0616171314629196e-17, 5.302876236065149e-17, -1] ],
    [[3.0616171314629196e-17, 5.302876236065149e-17, 1], [0.4330126941204071, 0.25, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142] ],
    [[0.8660253882408142, 0.5, 0], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.75, 0.4330126941204071, -0.5] ],
    [[0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 0.5, 0] ],
    [[0.75, 0.4330126941204071, -0.5], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142] ],
    [[0.4330126941204071, 0.25, 0.8660253882408142], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [0.75, 0.4330126941204071, 0.5] ],
    [[0.4330126941204071, 0.25, -0.8660253882408142], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [5.302876236065149e-17, 3.0616171314629196e-17, -1] ],
    [[5.302876236065149e-17, 3.0616171314629196e-17, 1], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142] ]
  ]
  t.is(pts.length, 72)
  t.true(comparePolygonsAsPoints(pts, exp))
})

test('sphere (options)', t => {
  // test radius
  let obs = sphere({radius: 5})
  let pts = geom3.toPoints(obs)
  let exp = [
  ]
  t.is(pts.length, 72)
  //t.true(comparePolygonsAsPoints(pts, exp))

  // test segments
  obs = sphere({segments: 8})
  pts = geom3.toPoints(obs)
  exp = [
  ]
  t.is(pts.length, 32)
})
