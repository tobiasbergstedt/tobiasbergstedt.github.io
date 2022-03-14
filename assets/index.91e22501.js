import {
  r as p,
  o as n,
  c as l,
  a as h,
  b as e,
  F as b,
  d as V,
  e as g,
  w as _,
  t as f,
  f as w,
  g as C,
  n as E,
  s as F,
  h as H,
  i as j,
  j as z,
  k as P,
  l as S,
  v as L,
  p as B,
  m as D,
  q as k,
  u as G,
  x as W,
  y as O
} from './vendor.e981d46d.js'
const U = function () {
  const s = document.createElement('link').relList
  if (s && s.supports && s.supports('modulepreload')) return
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) u(t)
  new MutationObserver((t) => {
    for (const o of t)
      if (o.type === 'childList')
        for (const d of o.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && u(d)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(t) {
    const o = {}
    return (
      t.integrity && (o.integrity = t.integrity),
      t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy),
      t.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : t.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function u(t) {
    if (t.ep) return
    t.ep = !0
    const o = r(t)
    fetch(t.href, o)
  }
}
U()
var M = [
  { text: 'Home', path: '/', icon: 'ion-ios-home' },
  { text: 'About', path: '/about', icon: 'ion-ios-home' },
  { text: 'My skills', path: '/skills', icon: 'ion-ios-home' },
  { text: 'Work', path: '/work', icon: 'ion-ios-home' },
  { text: 'Contact', path: '/contact', icon: 'ion-ios-home' }
]
var v = (a, s) => {
  const r = a.__vccOpts || a
  for (const [u, t] of s) r[u] = t
  return r
}
const q = {
    data() {
      return { navLinks: M }
    }
  },
  K = w(
    '<div id="social-links" data-v-5d5ef2be><a href="https://linkedin.com/in/tobias-bergstedt" data-v-5d5ef2be><i class="fab fa-linkedin" data-v-5d5ef2be></i></a><a href="https://github.com/tobiasbergstedt" data-v-5d5ef2be><i class="fab fa-github" data-v-5d5ef2be></i></a><a href="https://vimeo.com/user22554711" data-v-5d5ef2be><i class="fab fa-vimeo" data-v-5d5ef2be></i></a></div>',
    1
  )
function R(a, s, r, u, t, o) {
  const d = p('router-link')
  return (
    n(),
    l('nav', null, [
      h(d, { to: '/', id: 'logo' }),
      e('ul', null, [
        (n(!0),
        l(
          b,
          null,
          V(
            t.navLinks,
            (i, m) => (
              n(),
              g(
                d,
                { to: i.path, key: m },
                { default: _(() => [e('li', null, f(i.text), 1)]), _: 2 },
                1032,
                ['to']
              )
            )
          ),
          128
        )),
        K
      ])
    ])
  )
}
var J = v(q, [
  ['render', R],
  ['__scopeId', 'data-v-5d5ef2be']
])
const Y = {
    data() {
      return { navLinks: M, main: '', showNav: !1 }
    },
    methods: {
      hideMenu() {
        ;(this.main = document.querySelector('main')),
          this.main.classList.toggle('open'),
          (this.main.style.transform = 'translateX(0)'),
          (this.main.style.transform = null)
      }
    }
  },
  Q = w(
    '<div class="social-links" data-v-724dab69><a href="https://linkedin.com/in/tobias-bergstedt" data-v-724dab69><i class="fab fa-linkedin" data-v-724dab69></i></a><a href="https://github.com/tobiasbergstedt" data-v-724dab69><i class="fab fa-github" data-v-724dab69></i></a><a href="https://vimeo.com/user22554711" data-v-724dab69><i class="fab fa-vimeo" data-v-724dab69></i></a></div>',
    1
  )
function X(a, s, r, u, t, o) {
  const d = p('router-link')
  return (
    n(),
    l('nav', null, [
      e('ul', null, [
        (n(!0),
        l(
          b,
          null,
          V(
            t.navLinks,
            (i, m) => (
              n(),
              g(
                d,
                {
                  to: i.path,
                  onClick: s[0] || (s[0] = (A) => o.hideMenu()),
                  key: m
                },
                { default: _(() => [e('li', null, f(i.text), 1)]), _: 2 },
                1032,
                ['to']
              )
            )
          ),
          128
        ))
      ]),
      Q
    ])
  )
}
var Z = v(Y, [
  ['render', X],
  ['__scopeId', 'data-v-724dab69']
])
const ee = {
    data: () => ({
      mobileView: !0,
      showNav: !1,
      works: [
        {
          id: 11,
          title: 'Swindlr',
          text: 'A group project at ITHS where we created a dating site called Swindlr.',
          path: '/work/11',
          url: 'assets/work/swindlr.png',
          button: 'Check me out!'
        },
        {
          id: 10,
          title: 'Season ticket',
          text: 'Season ticket design for Frilles\xE5s Bandy, for the season 2021/2022.',
          path: '/work/10',
          url: 'assets/work/card.png',
          button: 'Check me out!'
        },
        {
          id: 9,
          title: 'PCC',
          text: 'An individual project at ITHS where I created a web app for comparing phones by properties, benchmark and price.',
          path: '/work/9',
          url: 'assets/work/pcc.png',
          button: 'Check me out!'
        },
        {
          id: 8,
          title: 'Merchandise',
          text: 'Merchandise designs for Frilles\xE5s Bandy.',
          path: '/work/8',
          url: 'assets/work/t-shirts.png',
          button: 'Check me out!'
        },
        {
          id: 7,
          title: 'TTVDB',
          text: 'An individual project at ITHS where I created a web app for checking the facts about your favorite tv shows.',
          path: '/work/7',
          url: 'assets/work/ttvdb.png',
          button: 'Check me out!'
        },
        {
          id: 6,
          title: 'Garden shed',
          text: 'A 3D model of a sea-side garden shed, made with Autodesk Maya.',
          path: '/work/6',
          url: 'assets/work/shed.png',
          button: 'Check me out!'
        },
        {
          id: 5,
          title: 'Frilles\xE5s Bandy',
          text: 'A group project at ITHS where we created a new website design idea for Frilles\xE5s Bandy.',
          path: '/work/5',
          url: 'assets/work/fbk.png',
          button: 'Check me out!'
        },
        {
          id: 4,
          title: 'Bridge',
          text: 'A 3D model of a stone bridge, made with Autodesk Maya.',
          path: '/work/4',
          url: 'assets/work/bridge.png',
          button: 'Check me out!'
        },
        {
          id: 3,
          title: 'Bandy players',
          text: 'A vector graphic of two bandy players, made in Adobe Illustrator.',
          path: '/work/3',
          url: 'assets/work/players.png',
          button: 'Check me out!'
        },
        {
          id: 2,
          title: 'Arena',
          text: 'A 3D model aerial view of a bandy arena, made with Autodesk Maya.',
          path: '/work/2',
          url: 'assets/work/arena.png',
          button: 'Check me out!'
        },
        {
          id: 1,
          title: 'Kitchen',
          text: 'A 3D model of a small kitchen, made with Autodesk Maya.',
          path: '/work/1',
          url: 'assets/work/kitchen.png',
          button: 'Check me out!'
        }
      ]
    }),
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 767
      },
      historyBack(a) {
        var s = document.activeElement,
          r = ['input', 'textarea']
        s &&
          r.indexOf(s.tagName.toLowerCase()) === -1 &&
          a.keyCode === 8 &&
          this.$router.go(-1)
      }
    },
    components: { Navigation: J, NavigationMobile: Z },
    created() {
      this.handleView(),
        window.addEventListener('resize', this.handleView),
        window.addEventListener('keyup', this.historyBack)
    }
  },
  te = e('i', { class: 'fas fa-bars' }, null, -1),
  ae = [te]
function se(a, s, r, u, t, o) {
  const d = p('Navigation'),
    i = p('NavigationMobile'),
    m = p('RouterView')
  return (
    n(),
    l(
      b,
      null,
      [
        a.mobileView ? C('', !0) : (n(), g(d, { key: 0 })),
        a.mobileView ? (n(), g(i, { key: 1 })) : C('', !0),
        e(
          'main',
          { class: E({ open: a.showNav }) },
          [
            a.mobileView
              ? (n(),
                l(
                  'div',
                  {
                    key: 0,
                    id: 'navigation-icon',
                    onClick: s[0] || (s[0] = (A) => (a.showNav = !a.showNav))
                  },
                  ae
                ))
              : C('', !0),
            h(m)
          ],
          2
        )
      ],
      64
    )
  )
}
var oe = v(ee, [['render', se]]),
  T = 'assets/tobias-400.eae8d0fa.png',
  ne = 'assets/tobias-275.be72598e.png'
const ie = {},
  re = ne + ' 275w, ' + T + ' 400w',
  le = { id: 'about-container' },
  de = w(
    '<h1 class="hide-2 blue-color" data-v-67428e99>Hey there.</h1><div id="right" data-v-67428e99><img srcset="' +
      re +
      '" sizes="(max-width: 767px) 275px, 400px" src="' +
      T +
      '" alt="Picture of Tobias" data-v-67428e99></div><div id="left" data-v-67428e99><h1 class="hide-1 blue-color" data-v-67428e99>Hey there.</h1><p data-v-67428e99> I&#39;m <span class="blue-color larger-font" data-v-67428e99>Tobias</span>, a Front End Developer and Graphic Designer based in <span class="blue-color" data-v-67428e99>Kungsbacka, Sweden</span>. I&#39;m especially passionate about the graphical aspect of web development, and about building easy-to-use applications that still solves the various complex challenges of today, manages to engage the end user, and looks good. </p><p data-v-67428e99> I&#39;ve been creating stuff on the web for the last 15, or so, years. Primarily for personal use, but also for family and friends. I <span class="blue-color" data-v-67428e99>love being creative</span> and seeing visions come to life in new, exciting ways. </p><p data-v-67428e99> The last few years, I&#39;ve been working with a professional sports club from Sweden, called Frilles\xE5s Bandy. There, I&#39;ve been <span class="blue-color" data-v-67428e99>Head of Graphic Design</span>, responsible for the <span class="blue-color" data-v-67428e99>design</span> and creation of marketing material for web and print, <span class="blue-color" data-v-67428e99>original artwork</span> for merchandise as well as a number of other projects. </p><p data-v-67428e99> On my free time, I encourage my creative side in my <span class="blue-color" data-v-67428e99>woodworking shop</span>, where I create custom designed furniture and smaller pieces of kitchenware. I also like to maintain an active lifestyle, which I do by <span class="blue-color" data-v-67428e99>playing bandy</span> (a winter sport, played on ice) as well as running and inline skating in the summer. </p><div id="button-container" data-v-67428e99><a href="public/tobias.pdf" download data-v-67428e99><input class="button" type="button" value="Download CV" data-v-67428e99></a></div></div>',
    3
  ),
  ce = [de]
function pe(a, s) {
  return n(), l('div', le, ce)
}
var ue = v(ie, [
  ['render', pe],
  ['__scopeId', 'data-v-67428e99']
])
const he = {
    components: { LMap: F, LTileLayer: H, LMarker: j, LControlLayers: z },
    data() {
      return { name: '', email: '', message: [], zoom: 7 }
    },
    methods: {
      sendEmail() {
        try {
          P.sendForm(
            'service_pp0ri2n',
            'template_l32785i',
            this.$refs.form,
            'LPEV8pnDhk0Ld_e2G',
            { name: this.name, email: this.email, message: this.message }
          )
        } catch (s) {
          console.log({ error: s })
        }
        ;(this.name = ''), (this.email = ''), (this.message = '')
        let a = document.getElementById('success')
        a.style.display = 'block'
      }
    }
  },
  y = (a) => (B('data-v-566921ce'), (a = a()), D(), a),
  ve = { class: 'contact-container' },
  me = { class: 'left' },
  _e = w(
    '<h1 data-v-566921ce>Contact me</h1><p data-v-566921ce> I&#39;m <span class="blue-color" data-v-566921ce>interested</span> in hearing from <span class="blue-color" data-v-566921ce>you</span>. Feel free to contact me if you feel like there&#39;s anything I could <span class="blue-color" data-v-566921ce>help you with</span>. </p><p data-v-566921ce> I enjoy <span class="blue-color" data-v-566921ce>ambitious projects</span>, and am currently interested in <span class="blue-color" data-v-566921ce>freelance work</span> as well as <span class="blue-color" data-v-566921ce>employment</span>. </p>',
    3
  ),
  be = { class: 'container' },
  fe = { ref: 'form' },
  we = y(() => e('label', null, 'Name', -1)),
  ge = y(() => e('label', null, 'Email', -1)),
  ke = y(() => e('label', null, 'Message', -1)),
  ye = y(() =>
    e(
      'p',
      { id: 'formValidation' },
      [
        k(' All fields must be filled in '),
        e('u', null, 'correctly'),
        k(' for button to be enabled. ')
      ],
      -1
    )
  ),
  xe = ['disabled'],
  $e = y(() =>
    e('p', { id: 'success' }, 'Thank you, message sent succesfully!', -1)
  ),
  Ie = { id: 'map-container' }
function Ae(a, s, r, u, t, o) {
  const d = p('l-tile-layer'),
    i = p('l-control-layers'),
    m = p('l-marker'),
    A = p('l-map')
  return (
    n(),
    l('div', ve, [
      e('div', me, [
        _e,
        e('div', be, [
          e(
            'form',
            fe,
            [
              we,
              S(
                e(
                  'input',
                  {
                    type: 'text',
                    'onUpdate:modelValue': s[0] || (s[0] = (c) => (t.name = c)),
                    name: 'name',
                    placeholder: 'Your Name'
                  },
                  null,
                  512
                ),
                [[L, t.name]]
              ),
              ge,
              S(
                e(
                  'input',
                  {
                    type: 'email',
                    'onUpdate:modelValue':
                      s[1] || (s[1] = (c) => (t.email = c)),
                    name: 'email',
                    placeholder: 'Your Email',
                    onBlur:
                      s[2] ||
                      (s[2] = (...c) =>
                        a.validateEmail && a.validateEmail(...c))
                  },
                  null,
                  544
                ),
                [[L, t.email]]
              ),
              ke,
              S(
                e(
                  'textarea',
                  {
                    name: 'message',
                    'onUpdate:modelValue':
                      s[3] || (s[3] = (c) => (t.message = c)),
                    cols: '30',
                    rows: '5',
                    placeholder: 'Message'
                  },
                  null,
                  512
                ),
                [[L, t.message]]
              ),
              ye,
              e(
                'input',
                {
                  type: 'button',
                  ref: 'button',
                  class: 'button',
                  id: 'submitButton',
                  onClick:
                    s[4] || (s[4] = (...c) => o.sendEmail && o.sendEmail(...c)),
                  value: 'Send',
                  disabled:
                    t.email.length < 6 ||
                    !t.email.includes('@') ||
                    t.message.length < 1 ||
                    t.name.length < 1
                },
                null,
                8,
                xe
              ),
              $e
            ],
            512
          )
        ])
      ]),
      e('div', Ie, [
        h(
          A,
          {
            modelValue: t.zoom,
            'onUpdate:modelValue': s[5] || (s[5] = (c) => (t.zoom = c)),
            zoom: t.zoom,
            'onUpdate:zoom': s[6] || (s[6] = (c) => (t.zoom = c)),
            center: [57.281237, 12.203422]
          },
          {
            default: _(() => [
              h(d, {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              }),
              h(i),
              h(m, { 'lat-lng': [57.281237, 12.203422] }, null, 8, ['lat-lng'])
            ]),
            _: 1
          },
          8,
          ['modelValue', 'zoom', 'center']
        )
      ])
    ])
  )
}
var Ve = v(he, [
  ['render', Ae],
  ['__scopeId', 'data-v-566921ce']
])
const Ce = {},
  x = (a) => (B('data-v-7bb1e108'), (a = a()), D(), a),
  Se = { id: 'greeting' },
  Le = w(
    '<p id="hi-my-name" data-v-7bb1e108>Hi, my name is</p><h1 class="blue-color" data-v-7bb1e108>Tobias Bergstedt</h1><div data-v-7bb1e108><h2 class="profession1" data-v-7bb1e108>Front End Developer</h2><h2 class="profession2" data-v-7bb1e108>Graphic Designer</h2><h2 class="profession3" data-v-7bb1e108>3D Artist</h2></div><p id="bio" data-v-7bb1e108> I&#39;m a <span class="blue-color" data-v-7bb1e108>Front End Developer</span> with a background in <span class="blue-color" data-v-7bb1e108>graphic design</span> and a bachelor&#39;s degree from studying <span class="blue-color" data-v-7bb1e108>3D animation and visualization</span>. </p>',
    4
  ),
  Be = { id: 'button-container' },
  De = x(() =>
    e(
      'input',
      { class: 'button', type: 'button', value: 'Contact me!' },
      null,
      -1
    )
  ),
  Me = { class: 'list-container' },
  Te = x(() =>
    e(
      'a',
      { href: 'swindlr/index.html' },
      [e('li', { id: 'card-4' }, [e('div', { class: 'overlay' })])],
      -1
    )
  ),
  Ne = x(() => e('li', { id: 'card-3' }, [e('div', { class: 'overlay' })], -1)),
  Ee = x(() =>
    e(
      'a',
      { href: 'pcc/index.html' },
      [e('li', { id: 'card-2' }, [e('div', { class: 'overlay' })])],
      -1
    )
  ),
  Fe = x(() => e('li', { id: 'card-1' }, [e('div', { class: 'overlay' })], -1))
function He(a, s) {
  const r = p('router-link')
  return (
    n(),
    l(
      b,
      null,
      [
        e('div', Se, [
          Le,
          e('div', Be, [
            h(r, { to: '/contact' }, { default: _(() => [De]), _: 1 })
          ])
        ]),
        e('div', Me, [
          e('ul', null, [
            Te,
            h(r, { to: '/work/10' }, { default: _(() => [Ne]), _: 1 }),
            Ee,
            h(r, { to: '/work/3' }, { default: _(() => [Fe]), _: 1 })
          ])
        ])
      ],
      64
    )
  )
}
var je = v(Ce, [
    ['render', He],
    ['__scopeId', 'data-v-7bb1e108']
  ]),
  $ = [
    {
      id: 11,
      title: 'Swindlr',
      text: 'A group project at ITHS where we created a dating site called Swindlr.',
      link: 'swindlr/index.html',
      url: 'assets/work/swindlr.png',
      button: 'Live version'
    },
    {
      id: 10,
      title: 'Season ticket',
      text: 'Season ticket design for Frilles\xE5s Bandy, for the season 2021/2022.',
      path: '/work/10',
      url: 'assets/work/card.png',
      fullImage: 'assets/work/full/card.png',
      srcset: 'assets/work/small/card.png 350w, assets/work/full/card.png 700w',
      button: 'Check me out!'
    },
    {
      id: 9,
      title: 'PCC',
      text: 'An individual project at ITHS where I created a web app for comparing phones by properties, benchmark and price.',
      link: 'pcc/index.html',
      url: 'assets/work/pcc.png',
      button: 'Live version'
    },
    {
      id: 8,
      title: 'Merchandise',
      text: 'Merchandise designs for Frilles\xE5s Bandy.',
      path: '/work/8',
      url: 'assets/work/t-shirts.png',
      fullImage: 'assets/work/full/t-shirts.png',
      srcset:
        'assets/work/small/t-shirts.png 350w, assets/work/full/t-shirts.png 700w',
      button: 'Check me out!'
    },
    {
      id: 7,
      title: 'TTVDB',
      text: 'An individual project at ITHS where I created a web app for checking the facts about your favorite tv shows.',
      link: 'ttvdb/index.html',
      url: 'assets/work/ttvdb.png',
      button: 'Live version'
    },
    {
      id: 6,
      title: 'Garden shed',
      text: 'A 3D model of a sea-side garden shed, made with Autodesk Maya.',
      path: '/work/6',
      url: 'assets/work/shed.png',
      fullImage: 'assets/work/full/shed.png',
      srcset: 'assets/work/small/shed.png 350w, assets/work/full/shed.png 700w',
      button: 'Check me out!'
    },
    {
      id: 5,
      title: 'Frilles\xE5s Bandy',
      text: 'A group project at ITHS where we created a new website design idea for Frilles\xE5s Bandy.',
      link: 'fbk/index.html',
      url: 'assets/work/fbk.png',
      button: 'Live version'
    },
    {
      id: 4,
      title: 'Bridge',
      text: 'A 3D model of a stone bridge, made with Autodesk Maya.',
      path: '/work/4',
      url: 'assets/work/bridge.png',
      fullImage: 'assets/work/full/bridge.png',
      srcset:
        'assets/work/small/bridge.png 350w, assets/work/full/bridge.png 700w',
      button: 'Check me out!'
    },
    {
      id: 3,
      title: 'Bandy players',
      text: 'A vector graphic of two bandy players, made in Adobe Illustrator.',
      path: '/work/3',
      url: 'assets/work/players.png',
      fullImage: 'assets/work/full/players.png',
      srcset:
        'assets/work/small/players.png 350w, assets/work/full/players.png 700w',
      button: 'Check me out!'
    },
    {
      id: 2,
      title: 'Arena',
      text: 'A 3D model aerial view of a bandy arena, made with Autodesk Maya.',
      path: '/work/2',
      url: 'assets/work/arena.png',
      fullImage: 'assets/work/full/arena.png',
      srcset:
        'assets/work/small/arena.png 350w, assets/work/full/arena.png 700w',
      button: 'Check me out!'
    },
    {
      id: 1,
      title: 'Kitchen',
      text: 'A 3D model of a small kitchen, made with Autodesk Maya.',
      path: '/work/1',
      url: 'assets/work/kitchen.png',
      fullImage: 'assets/work/full/kitchen.png',
      srcset:
        'assets/work/small/kitchen.png 350w, assets/work/full/kitchen.png 700w',
      button: 'Check me out!'
    }
  ]
const ze = {
    data() {
      return { works: $ }
    }
  },
  N = (a) => (B('data-v-7349c937'), (a = a()), D(), a),
  Pe = N(() =>
    e(
      'div',
      { id: 'h1-container' },
      [
        e('h1', null, [
          k(' Below is a '),
          e('span', { class: 'blue-color' }, 'selection'),
          k(' of my previous works. ')
        ]),
        e('h1', null, [
          k('Feel free to '),
          e('span', { class: 'blue-color' }, 'check them out!')
        ])
      ],
      -1
    )
  ),
  Ge = { id: 'work-container' },
  We = { id: 'work-cards-container' },
  Oe = ['src'],
  Ue = { class: 'overlay' },
  qe = N(() => e('div', { class: 'overlay-div-1' }, null, -1)),
  Ke = { class: 'text' },
  Re = ['value'],
  Je = ['href'],
  Ye = ['value'],
  Qe = { class: 'overlay-div-2' },
  Xe = { class: 'after-text' }
function Ze(a, s, r, u, t, o) {
  const d = p('router-link')
  return (
    n(),
    l(
      b,
      null,
      [
        Pe,
        e('div', Ge, [
          e('div', We, [
            (n(!0),
            l(
              b,
              null,
              V(
                t.works,
                (i) => (
                  n(),
                  l('div', { class: 'list-complete-item', key: i.id }, [
                    e('img', { src: i.url, alt: '' }, null, 8, Oe),
                    e('div', Ue, [
                      qe,
                      e('div', Ke, [
                        e('p', null, f(i.text), 1),
                        i.path
                          ? (n(),
                            g(
                              d,
                              { key: 0, to: i.path },
                              {
                                default: _(() => [
                                  e(
                                    'input',
                                    {
                                      class: 'button',
                                      type: 'button',
                                      value: i.button
                                    },
                                    null,
                                    8,
                                    Re
                                  )
                                ]),
                                _: 2
                              },
                              1032,
                              ['to']
                            ))
                          : (n(),
                            l(
                              'a',
                              { key: 1, href: i.link },
                              [
                                e(
                                  'input',
                                  {
                                    class: 'button',
                                    type: 'button',
                                    value: i.button
                                  },
                                  null,
                                  8,
                                  Ye
                                )
                              ],
                              8,
                              Je
                            ))
                      ]),
                      e('div', Qe, [e('div', Xe, f(i.title), 1)])
                    ])
                  ])
                )
              ),
              128
            ))
          ])
        ])
      ],
      64
    )
  )
}
var et = v(ze, [
  ['render', Ze],
  ['__scopeId', 'data-v-7349c937']
])
const tt = {},
  at = { id: 'skills-container' },
  st = w(
    '<div id="left" data-v-5e55d734><h1 class="blue-color" data-v-5e55d734>Skills</h1><div id="left-grid" data-v-5e55d734><p data-v-5e55d734>JavaScript</p><p data-v-5e55d734>HTML / CSS</p><p data-v-5e55d734>Vue.js</p><p data-v-5e55d734>Vite</p><p data-v-5e55d734>Java</p><p data-v-5e55d734>React.js</p><p data-v-5e55d734>Node.js</p><p data-v-5e55d734>TypeScript</p><p data-v-5e55d734>MySQL</p></div><h1 class="blue-color" data-v-5e55d734>Tools</h1><div id="left-grid" data-v-5e55d734><p data-v-5e55d734>Git</p><p data-v-5e55d734>Adobe Creative Cloud</p><p data-v-5e55d734>Visual Studio Code</p><p data-v-5e55d734>Figma</p><p data-v-5e55d734>Autodesk Maya</p><p data-v-5e55d734>Autodesk Inventor</p><p data-v-5e55d734>Scrum</p></div><h1 class="blue-color third" data-v-5e55d734>Workplace Experience</h1><div id="skills-card" data-v-5e55d734><div data-v-5e55d734><h2 data-v-5e55d734>Head of Graphic Design</h2><h3 data-v-5e55d734>Frilles\xE5s Bandy</h3><p class="bold" data-v-5e55d734>2018 - now</p><p data-v-5e55d734> Original content creator where I was responsible for graphic material for web and print, as well as original merchandise designs. </p></div><div data-v-5e55d734><h2 data-v-5e55d734>Team Leader</h2><h3 data-v-5e55d734>AB Str\xE4ngbetong</h3><p class="bold" data-v-5e55d734>2015 -2021</p><p data-v-5e55d734> Production team leader, responsible for production planning, quality control, workplace improvements and personnel issues. </p></div></div></div><div id="middle" data-v-5e55d734></div><div id="right" data-v-5e55d734><h1 class="blue-color" data-v-5e55d734>Education</h1><div data-v-5e55d734><h2 data-v-5e55d734>Front End Development</h2><p class="bold blue-color" data-v-5e55d734>IT-H\xF6gskolan, G\xF6teborg</p><p data-v-5e55d734>august 2021 - now</p></div><div data-v-5e55d734><h2 data-v-5e55d734>3D Animation and Visualization</h2><p class="bold blue-color" data-v-5e55d734>University West, Trollh\xE4ttan</p><p data-v-5e55d734>august 2011 - june 2014</p></div><div data-v-5e55d734><h2 data-v-5e55d734>Technical Entrepreneur Programme</h2><p class="bold blue-color" data-v-5e55d734>Peder Skrivares Skola, Varberg</p><p data-v-5e55d734>august 2007 - june 2010</p></div></div>',
    3
  ),
  ot = [st]
function nt(a, s) {
  return n(), l('div', at, ot)
}
var it = v(tt, [
  ['render', nt],
  ['__scopeId', 'data-v-5e55d734']
])
const rt = {
    data() {
      return {
        works: $,
        workId: $[2].id,
        index: null,
        routeParam: parseInt(this.$route.params.workid)
      }
    },
    methods: {
      getId(a) {
        return $.findIndex((s) => s.id === a)
      }
    },
    created() {
      this.index = $.findIndex((a) => a.id === this.routeParam)
    }
  },
  lt = { id: 'work-details' },
  dt = { class: 'blue-color' },
  ct = { id: 'image-div' },
  pt = ['srcset', 'src', 'alt']
function ut(a, s, r, u, t, o) {
  return (
    n(),
    l('div', lt, [
      e('h1', dt, f(t.works[this.index].title), 1),
      e('p', null, f(t.works[this.index].text), 1),
      e('div', ct, [
        e(
          'img',
          {
            srcset: t.works[this.index].srcset,
            sizes: '(max-width: 767px) 350px, 700px',
            src: t.works[this.index].fullImage,
            alt: t.works[this.index].title + ' picture'
          },
          null,
          8,
          pt
        )
      ])
    ])
  )
}
var I = v(rt, [
    ['render', ut],
    ['__scopeId', 'data-v-5ec31c47']
  ]),
  ht = G({
    history: W(),
    routes: [
      { component: je, path: '/' },
      { component: Ve, path: '/contact' },
      { component: ue, path: '/about' },
      { component: et, path: '/work' },
      { component: I, path: '/work/:workid' },
      { component: I, path: '/fbk' },
      { component: I, path: '/ttvdb' },
      { component: I, path: '/pcc' },
      { component: I, path: '/swindlr' },
      { component: it, path: '/skills' }
    ]
  })
O(oe).use(ht).mount('#app')
