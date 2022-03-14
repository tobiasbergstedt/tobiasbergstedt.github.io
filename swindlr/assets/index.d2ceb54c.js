import {
  r as c,
  o as r,
  c as N,
  a as o,
  b as e,
  d as u,
  w as f,
  e as _,
  p as k,
  f as b,
  F as m,
  g as S,
  v as I,
  h as V,
  t as g,
  i as y,
  n as j,
  j as T,
  k as H,
  l as R,
  m as U,
  q as A,
  V as K,
  s as O
} from './vendor.af6055af.js'
const q = function () {
  const s = document.createElement('link').relList
  if (s && s.supports && s.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) p(i)
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === 'childList')
        for (const l of n.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && p(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function d(i) {
    const n = {}
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    )
  }
  function p(i) {
    if (i.ep) return
    i.ep = !0
    const n = d(i)
    fetch(i.href, n)
  }
}
q()
var v = (t, s) => {
  const d = t.__vccOpts || t
  for (const [p, i] of s) d[p] = i
  return d
}
const G = {
  created() {
    window.addEventListener('keyup', this.historyBack)
  },
  components: {},
  data() {
    return {}
  },
  methods: {
    historyBack(t) {
      var s = document.activeElement,
        d = ['input', 'textarea']
      s &&
        d.indexOf(s.tagName.toLowerCase()) === -1 &&
        t.keyCode === 8 &&
        this.$router.go(-1)
    }
  }
}
function Q(t, s, d, p, i, n) {
  const l = c('RouterView')
  return r(), N(l)
}
var z = v(G, [['render', Q]])
const X = {
    methods: {
      toggleSideMenu() {
        const t = this.$refs.nav.classList
        t.contains('active') ? t.remove('active') : t.add('active')
      }
    }
  },
  C = (t) => (k('data-v-2ed734fc'), (t = t()), b(), t),
  Y = { class: 'burger-menu' },
  W = { id: 'topbar-mobile' },
  Z = _('Swindlr'),
  ee = { class: 'side-menu' },
  te = C(() =>
    e('li', null, [e('a', { href: '#', class: 'options' }, 'Produkter')], -1)
  ),
  se = C(() =>
    e('li', null, [e('a', { href: '#', class: 'options' }, 'Support')], -1)
  ),
  ie = _('Logga in'),
  ne = { ref: 'nav' },
  ae = { class: 'topbar-heading' },
  re = _('Swindlr'),
  oe = C(() =>
    e('li', null, [e('a', { href: '#', class: 'options' }, 'Produkter')], -1)
  ),
  le = C(() =>
    e('li', null, [e('a', { href: '#', class: 'options' }, 'Support')], -1)
  ),
  de = _('Logga in')
function ue(t, s, d, p, i, n) {
  const l = c('router-link')
  return (
    r(),
    o('header', null, [
      e('nav', null, [
        e('div', Y, [
          e('div', W, [
            e('i', {
              onClick:
                s[0] ||
                (s[0] = (...a) => n.toggleSideMenu && n.toggleSideMenu(...a)),
              class: 'fas fa-bars menu-icon'
            }),
            e('h2', null, [u(l, { to: '/' }, { default: f(() => [Z]), _: 1 })])
          ]),
          e('div', ee, [
            e('ul', null, [
              te,
              se,
              u(
                l,
                { to: '/signin', class: 'login' },
                { default: f(() => [ie]), _: 1 }
              )
            ])
          ])
        ]),
        e(
          'ul',
          ne,
          [
            e('h2', ae, [u(l, { to: '/' }, { default: f(() => [re]), _: 1 })]),
            oe,
            le,
            e('li', null, [
              u(
                l,
                { to: '/signin', class: 'login' },
                { default: f(() => [de]), _: 1 }
              )
            ])
          ],
          512
        )
      ])
    ])
  )
}
var B = v(X, [
  ['render', ue],
  ['__scopeId', 'data-v-2ed734fc']
])
const ce = { components: { TheHeader: B } },
  pe = { class: 'container-landing' },
  ge = { class: 'landing-view' },
  he = e('h1', null, 'Hitta den du s\xF6ker!', -1),
  me = e('p', null, 'Tr\xE4ffa och chatta med nya personer i n\xE4rheten.', -1),
  _e = _('Skapa ett konto')
function fe(t, s, d, p, i, n) {
  const l = c('TheHeader'),
    a = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        u(l),
        e('div', pe, [
          e('div', ge, [
            he,
            me,
            u(
              a,
              { to: '/signup', class: 'register' },
              { default: f(() => [_e]), _: 1 }
            )
          ])
        ])
      ],
      64
    )
  )
}
var ve = v(ce, [['render', fe]])
const ke = {
    emits: ['show-message'],
    data() {
      return {
        message: !1,
        s: '',
        t: '',
        u: '',
        user: '',
        errUser: !1,
        errPass: !1
      }
    },
    methods: {
      loginUser() {
        ;(this.user = JSON.parse(localStorage.getItem('vuex'))),
          this.user.email == this.t
            ? this.user.password == this.u
              ? ((this.$store.state.user = this.user.user),
                (this.$store.state.password = this.user.password),
                this.$router.push({ name: 'lounge' }))
              : (this.errPass = !0)
            : (this.errUser = !0),
          (this.message = !this.message)
      },
      welcomeUser() {
        this.$emit('show-message')
      }
    }
  },
  L = (t) => (k('data-v-1e88f30c'), (t = t()), b(), t),
  be = L(() => e('h2', { id: 'skapakonto' }, 'Logga in p\xE5 konto', -1)),
  ye = { class: 'wrapper' },
  $e = L(() => e('label', { id: 'elabel', for: 'email' }, 'Email', -1)),
  Ve = { key: 0, style: { color: 'red' } },
  we = L(() =>
    e('label', { id: 'plabel', for: 'password' }, 'L\xF6senord', -1)
  ),
  xe = { key: 1, style: { color: 'red' } },
  Se = L(() => e('a', { id: 'loginLink', href: '' }, 'Registrera', -1)),
  Ie = { key: 2 }
function je(t, s, d, p, i, n) {
  const l = c('RouterLink')
  return (
    r(),
    o(
      m,
      null,
      [
        be,
        e('div', ye, [
          $e,
          S(
            e(
              'input',
              {
                'onUpdate:modelValue': s[0] || (s[0] = (a) => (i.t = a)),
                id: 'email',
                type: 'text',
                placeholder: 'Mail',
                onBlurOnce: s[1] || (s[1] = (a) => (t.usernameIsTouched = !0))
              },
              null,
              544
            ),
            [[I, i.t]]
          ),
          this.errUser == !0
            ? (r(), o('small', Ve, 'Email Not Match'))
            : V('', !0),
          we,
          S(
            e(
              'input',
              {
                'onUpdate:modelValue': s[2] || (s[2] = (a) => (i.u = a)),
                id: 'password',
                type: 'password',
                placeholder: 'L\xF6senord'
              },
              null,
              512
            ),
            [[I, i.u]]
          ),
          this.errPass == !0
            ? (r(), o('small', xe, 'Password Not Match'))
            : V('', !0),
          e(
            'input',
            {
              onClick:
                s[3] || (s[3] = (...a) => n.loginUser && n.loginUser(...a)),
              onShowMessage:
                s[4] || (s[4] = (...a) => n.welcomeUser && n.welcomeUser(...a)),
              id: 'button',
              type: 'button',
              value: 'Logga in'
            },
            null,
            32
          ),
          u(l, { to: '/signup' }, { default: f(() => [Se]), _: 1 }),
          i.message
            ? (r(),
              o('div', Ie, [
                e(
                  'h3',
                  null,
                  'V\xE4lkommen ' + g(this.$store.state.user) + '!',
                  1
                )
              ]))
            : V('', !0)
        ])
      ],
      64
    )
  )
}
var Ce = v(ke, [
  ['render', je],
  ['__scopeId', 'data-v-1e88f30c']
])
const Le = { components: { TheHeader: B, SigninComponent: Ce } }
function Ee(t, s, d, p, i, n) {
  const l = c('TheHeader'),
    a = c('SigninComponent')
  return r(), o(m, null, [u(l), u(a)], 64)
}
var Ne = v(Le, [['render', Ee]])
const Be = {
    emits: ['show-message'],
    data() {
      return {
        message: !1,
        s: '',
        t: '',
        u: '',
        msg: [],
        usernameValid: !1,
        emailValid: !1,
        passwordValid: !1,
        isRegisterDisabled: !0,
        usernameIsTouched: Boolean(!1),
        emailIsTouched: Boolean(!1),
        passwordIsTouched: Boolean(!1)
      }
    },
    watch: {
      t(t) {
        ;(this.email = t), this.validateEmail(t), this.formCheckValidation()
      },
      s(t) {
        ;(this.username = t), this.nameIsValid(t), this.formCheckValidation()
      },
      u(t) {
        ;(this.password = t),
          this.passwordIsValid(t),
          this.formCheckValidation()
      }
    },
    methods: {
      regUser() {
        console.log('testing', 'register'),
          this.$store.commit('setUser', this.s),
          this.$store.commit('setEmail', this.t),
          this.$store.commit('setPassword', this.u),
          (this.message = !this.message)
      },
      formCheckValidation() {
        this.passwordValid && this.emailValid && this.usernameValid
          ? (this.isRegisterDisabled = !1)
          : (this.isRegisterDisabled = !0)
      },
      welcomeUser() {
        this.$emit('show-message')
      },
      validateEmail() {
        ;/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.t)
          ? ((this.msg.email = ''), (this.emailValid = !0))
          : ((this.msg.email = 'Invalid Email Address'), (this.emailValid = !1))
      },
      nameIsValid() {
        const t = this.s
        t.length >= 5 && t.length <= 20
          ? ((this.msg.username = ''), (this.usernameValid = !0))
          : ((this.msg.username = 'M\xE5ste inneh\xE5lla 5-20 tecken'),
            (this.usernameValid = !1))
      },
      emailIsValid() {
        const t = this.userInfo.email
        return t.length > 5 && t.includes('@')
      },
      passwordIsValid() {
        const t = this.u
        t.length >= 5 && t.length <= 20
          ? ((this.msg.password = ''), (this.passwordValid = !0))
          : ((this.msg.password = 'M\xE5ste inneh\xE5lla 5-20 tecken'),
            (this.passwordValid = !1))
      }
    }
  },
  M = (t) => (k('data-v-225186ac'), (t = t()), b(), t),
  Je = M(() => e('h2', { id: 'skapakonto' }, 'Skapa nytt konto', -1)),
  Me = { class: 'wrapper' },
  De = { id: 'userlabel', for: 'username' },
  Pe = _('Anv\xE4ndarnamn '),
  Fe = { key: 0, class: 'warning-text' },
  Te = { id: 'elabel', for: 'email' },
  He = _('Email '),
  Re = { key: 0, class: 'warning-text' },
  Ue = { id: 'plabel', for: 'password' },
  Ae = _('L\xF6senord '),
  Ke = { key: 0, class: 'warning-text' },
  Oe = ['disabled'],
  qe = M(() => e('a', { id: 'loginLink', href: '' }, 'Logga in', -1)),
  Ge = { key: 0 }
function Qe(t, s, d, p, i, n) {
  const l = c('RouterLink')
  return (
    r(),
    o(
      m,
      null,
      [
        Je,
        e('div', Me, [
          e('label', De, [
            Pe,
            S(
              e(
                'input',
                {
                  'onUpdate:modelValue': s[0] || (s[0] = (a) => (i.s = a)),
                  id: 'username',
                  type: 'text',
                  placeholder: 'Anv\xE4ndarnamn',
                  onBlur: s[1] || (s[1] = (a) => n.nameIsValid())
                },
                null,
                544
              ),
              [[I, i.s]]
            ),
            i.msg.username
              ? (r(), o('span', Fe, g(i.msg.username), 1))
              : V('', !0)
          ]),
          e('label', Te, [
            He,
            S(
              e(
                'input',
                {
                  'onUpdate:modelValue': s[2] || (s[2] = (a) => (i.t = a)),
                  id: 'email',
                  type: 'text',
                  placeholder: 'Mail',
                  onBlur: s[3] || (s[3] = (a) => n.validateEmail())
                },
                null,
                544
              ),
              [[I, i.t]]
            ),
            i.msg.email ? (r(), o('span', Re, g(i.msg.email), 1)) : V('', !0)
          ]),
          e('label', Ue, [
            Ae,
            S(
              e(
                'input',
                {
                  'onUpdate:modelValue': s[4] || (s[4] = (a) => (i.u = a)),
                  id: 'password',
                  type: 'password',
                  placeholder: 'L\xF6senord',
                  onBlur: s[5] || (s[5] = (a) => n.passwordIsValid())
                },
                null,
                544
              ),
              [[I, i.u]]
            ),
            i.msg.password
              ? (r(), o('span', Ke, g(i.msg.password), 1))
              : V('', !0)
          ]),
          e(
            'input',
            {
              disabled: i.isRegisterDisabled,
              onClick: s[6] || (s[6] = (...a) => n.regUser && n.regUser(...a)),
              onShowMessage:
                s[7] || (s[7] = (...a) => n.welcomeUser && n.welcomeUser(...a)),
              id: 'button',
              type: 'button',
              value: 'Registrera'
            },
            null,
            40,
            Oe
          ),
          u(l, { to: '/signin' }, { default: f(() => [qe]), _: 1 }),
          i.message
            ? (r(),
              o('div', Ge, [
                e(
                  'h3',
                  null,
                  'V\xE4lkommen ' + g(this.$store.state.user) + '!',
                  1
                )
              ]))
            : V('', !0)
        ])
      ],
      64
    )
  )
}
var ze = v(Be, [
  ['render', Qe],
  ['__scopeId', 'data-v-225186ac']
])
const Xe = { components: { SignupComponent: ze, TheHeader: B } }
function Ye(t, s, d, p, i, n) {
  const l = c('TheHeader'),
    a = c('SignupComponent')
  return r(), o(m, null, [u(l), u(a)], 64)
}
var We = v(Xe, [['render', Ye]])
const Ze = {},
  et = {}
var tt = 'assets/no-image.b6a5d1b1.png'
const st = {
    data() {
      return this.$store.state.picture.length
        ? { pic2: 'assets/save-image.png' }
        : { pic2: 'assets/save-image.png' }
    },
    methods: {
      imageUploaded() {
        document.getElementById('profile-pic').src = this.pic2
      },
      reload() {
        this.$store.commit('setPicture', localStorage.getItem('savedImage')),
          (document.getElementById('profile-pic').src =
            this.$store.state.picture)
      },
      imageToBase64() {
        var t = document.getElementById('uploadImage').files
        if (t.length > 0) {
          var s = t[0],
            d = new FileReader()
          ;(d.onload = function (p) {
            var i = p.target.result
            localStorage.setItem('savedImage', i)
          }),
            d.readAsDataURL(s)
        }
      }
    }
  },
  it = (t) => (k('data-v-2f265af0'), (t = t()), b(), t),
  nt = { id: 'img-container' },
  at = ['src'],
  rt = { src: tt, alt: '', id: 'profile-pic', key: 1 },
  ot = it(() => e('p', null, 'V\xE4lj ny profilbild.', -1)),
  lt = { id: 'input-container' },
  dt = { for: 'uploadImage', class: 'custom-file-upload btn' },
  ut = _(' Bl\xE4ddra... ')
function ct(t, s, d, p, i, n) {
  return (
    r(),
    o(
      m,
      null,
      [
        e('div', nt, [
          this.$store.state.picture.length
            ? (r(),
              o(
                'img',
                {
                  src: this.$store.state.picture,
                  alt: '',
                  id: 'profile-pic',
                  key: 0
                },
                null,
                8,
                at
              ))
            : (r(), o('img', rt))
        ]),
        ot,
        e('div', lt, [
          e('label', dt, [
            ut,
            e(
              'input',
              {
                type: 'file',
                id: 'uploadImage',
                ref: 'myFile',
                onChange:
                  s[0] || (s[0] = (l) => (n.imageToBase64(), n.imageUploaded()))
              },
              null,
              544
            )
          ]),
          e('input', {
            class: 'btn',
            type: 'button',
            value: 'Ladda upp',
            onClick: s[1] || (s[1] = (l) => n.reload())
          })
        ])
      ],
      64
    )
  )
}
var pt = v(st, [
  ['render', ct],
  ['__scopeId', 'data-v-2f265af0']
])
const gt = {
    data() {
      return {
        nameValue: this.$store.state.name,
        ageValue: this.$store.state.age,
        interestsValue: this.$store.state.interests,
        biographyValue: this.$store.state.biography
      }
    },
    methods: {
      changedValue() {
        ;(this.nameValue = document.getElementById('edit-name').value),
          (this.ageValue = document.getElementById('edit-age').value),
          (this.interestsValue =
            document.getElementById('edit-interests').value),
          (this.biographyValue =
            document.getElementById('edit-biography').value),
          this.$store.commit('setName', this.nameValue),
          this.$store.commit('setAge', this.ageValue),
          this.$store.commit('setInterests', this.interestsValue),
          this.$store.commit('setBiography', this.biographyValue)
      }
    }
  },
  ht = _(' Namn: '),
  mt = ['value'],
  _t = _(' \xC5lder: '),
  ft = ['value'],
  vt = _(' Intressen & hobbies: '),
  kt = ['value'],
  bt = _(' Biografi: '),
  yt = ['value']
function $t(t, s, d, p, i, n) {
  return (
    r(),
    o(
      m,
      null,
      [
        e('label', null, [
          ht,
          this.$store.state.name.length
            ? (r(),
              o(
                'input',
                {
                  key: 0,
                  type: 'text',
                  id: 'edit-name',
                  onChange:
                    s[0] ||
                    (s[0] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: i.nameValue
                },
                null,
                40,
                mt
              ))
            : (r(),
              o(
                'input',
                {
                  key: 1,
                  type: 'text',
                  id: 'edit-name',
                  onChange:
                    s[1] ||
                    (s[1] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: ''
                },
                null,
                32
              ))
        ]),
        e('label', null, [
          _t,
          this.$store.state.age.length
            ? (r(),
              o(
                'input',
                {
                  key: 0,
                  type: 'text',
                  id: 'edit-age',
                  onChange:
                    s[2] ||
                    (s[2] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: i.ageValue
                },
                null,
                40,
                ft
              ))
            : (r(),
              o(
                'input',
                {
                  key: 1,
                  type: 'text',
                  id: 'edit-age',
                  onChange:
                    s[3] ||
                    (s[3] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: ''
                },
                null,
                32
              ))
        ]),
        e('label', null, [
          vt,
          this.$store.state.interests.length
            ? (r(),
              o(
                'textarea',
                {
                  key: 0,
                  id: 'edit-interests',
                  onChange:
                    s[4] ||
                    (s[4] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: i.interestsValue,
                  rows: '4',
                  cols: '50'
                },
                null,
                40,
                kt
              ))
            : (r(),
              o(
                'textarea',
                {
                  key: 1,
                  id: 'edit-interests',
                  onChange:
                    s[5] ||
                    (s[5] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: '',
                  rows: '4',
                  cols: '50'
                },
                null,
                32
              ))
        ]),
        e('label', null, [
          bt,
          this.$store.state.biography.length
            ? (r(),
              o(
                'textarea',
                {
                  key: 0,
                  id: 'edit-biography',
                  onChange:
                    s[6] ||
                    (s[6] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: i.biographyValue,
                  rows: '4',
                  cols: '50'
                },
                null,
                40,
                yt
              ))
            : (r(),
              o(
                'textarea',
                {
                  key: 1,
                  id: 'edit-biography',
                  onChange:
                    s[7] ||
                    (s[7] = (...l) => n.changedValue && n.changedValue(...l)),
                  value: '',
                  rows: '4',
                  cols: '50'
                },
                null,
                32
              ))
        ])
      ],
      64
    )
  )
}
var Vt = v(gt, [
  ['render', $t],
  ['__scopeId', 'data-v-59d36020']
])
const wt = {
    props: {
      navLinks: { default: () => [], type: Array },
      background: { default: '', type: String },
      linkColor: { default: '', type: String },
      hoverBackground: { default: '', type: String },
      imagePath: { default: '', type: String }
    },
    methods: {
      toggleNav() {
        const t = this.$refs.nav.classList
        t.contains('active') ? t.remove('active') : t.add('active')
      }
    }
  },
  xt = { class: 'image-logo' },
  St = { class: 'burger-menu' },
  It = { class: '', style: { display: 'inline-flex' } },
  jt = _('Swindlr'),
  Ct = { class: 'web-logo', style: {} },
  Lt = _('Swindlr')
function Et(t, s, d, p, i, n) {
  const l = c('router-link')
  return (
    r(),
    o(
      'nav',
      { style: j({ background: d.background || '#333' }) },
      [
        e('div', xt, [
          e('div', St, [
            e('i', {
              onClick:
                s[0] || (s[0] = (...a) => n.toggleNav && n.toggleNav(...a)),
              class: 'fas fa-bars menu-icon',
              style: { padding: '25px' }
            }),
            e('h2', It, [u(l, { to: '/' }, { default: f(() => [jt]), _: 1 })])
          ])
        ]),
        e(
          'ul',
          { style: j({ background: d.background || '#333' }), ref: 'nav' },
          [
            e('h2', Ct, [u(l, { to: '/' }, { default: f(() => [Lt]), _: 1 })]),
            (r(!0),
            o(
              m,
              null,
              y(
                d.navLinks,
                (a, h) => (
                  r(),
                  o(
                    'li',
                    {
                      key: h,
                      style: j({ color: d.linkColor || '#DDD' }),
                      onMouseenter:
                        s[1] ||
                        (s[1] = (x) =>
                          (x.currentTarget.style.background =
                            d.hoverBackground || '#999')),
                      onMouseleave:
                        s[2] ||
                        (s[2] = (x) =>
                          (x.currentTarget.style.background =
                            d.background || '#333'))
                    },
                    [
                      u(
                        l,
                        {
                          to: a.path,
                          style: j({ color: d.linkColor || '#DDD' })
                        },
                        {
                          default: f(() => [
                            _(g(a.text) + ' ', 1),
                            e('i', { class: T(a.icon) }, null, 2)
                          ]),
                          _: 2
                        },
                        1032,
                        ['to', 'style']
                      )
                    ],
                    36
                  )
                )
              ),
              128
            ))
          ],
          4
        )
      ],
      4
    )
  )
}
var $ = v(wt, [
  ['render', Et],
  ['__scopeId', 'data-v-27ba6ed3']
])
const Nt = {
    data() {
      return {
        nameValue: '',
        ageValue: '',
        interestsValue: '',
        biographyValue: '',
        pictureValue: '',
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ]
      }
    },
    components: {
      UploadImage: pt,
      EditProfileParameters: Vt,
      ResponsiveNavigation: $
    },
    methods: {
      saveChanges() {
        ;(this.nameValue = this.$store.state.name),
          (this.ageValue = this.$store.state.age),
          (this.interestsValue = this.$store.state.interests),
          (this.biographyValue = this.$store.state.biography),
          (this.pictureValue = this.$store.state.picture),
          this.$store.commit('setName', this.nameValue),
          this.$store.commit('setAge', this.ageValue),
          this.$store.commit('setInterests', this.interestsValue),
          this.$store.commit('setBiography', this.biographyValue),
          this.$store.commit('setPicture', this.pictureValue)
      }
    }
  },
  Bt = (t) => (k('data-v-455c4f58'), (t = t()), b(), t),
  Jt = Bt(() => e('h2', null, 'Redigera profil', -1)),
  Mt = { id: 'edit-container' },
  Dt = { id: 'left-side' },
  Pt = { id: 'right-side' }
function Ft(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('UploadImage'),
    h = c('EditProfileParameters')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        Jt,
        e('div', Mt, [
          e('div', Dt, [u(a)]),
          e('div', Pt, [
            u(h),
            e('input', {
              id: 'saveProfile',
              type: 'button',
              value: 'Spara din profil',
              onClick: s[0] || (s[0] = (x) => n.saveChanges())
            })
          ])
        ])
      ],
      64
    )
  )
}
var Tt = v(Nt, [
    ['render', Ft],
    ['__scopeId', 'data-v-455c4f58']
  ]),
  Ht = [
    {
      id: '1',
      name: 'Anders',
      age: '31',
      interests: ['Sl\xE4ktforska', 'Springa maratonlopp'],
      biography: `Nuvarande relationsstatus:
Gjorde middag f\xF6r tv\xE5. \xC5t upp b\xE5da.`,
      picture: 'assets/profilepics/1.png'
    },
    {
      id: '2',
      name: 'Johanna',
      age: '27',
      interests: ['L\xE4sa', 'Resa', 'H\xE4lsokost'],
      biography: 'Hur m\xE5nga pudlar har vi inom 10 \xE5r?',
      picture: 'assets/profilepics/2.png'
    },
    {
      id: '3',
      name: 'Erika',
      age: '24',
      interests: ['Smyckestillverkning', '\xC5tervinning'],
      biography: `Om mig:
\u2022Jag r\xE4ddade min syster fr\xE5n att krocka n\xE4r hon \xF6vningsk\xF6rde
\u2022Jag har varit i fler \xE4n 20 + l\xE4nder
\u2022Expert p\xE5 att mysa
\u2022Brunetter f\xE5r mig att bli kn\xE4svag
\u2022I framtiden vill jag bo i ett slott med 3 barn och katt

Oj, missade! vill s\xE5 klart g\xE5 p\xE5 en dejt ocks\xE5.`,
      picture: 'assets/profilepics/3.png'
    },
    {
      id: '4',
      name: 'Carl',
      age: '34',
      interests: ['Glasbl\xE5sning', 'Body building', 'Biodling'],
      biography: `L\xE4s inte det h\xE4r\u2026
N\xE4r jag gick i 3:an hatade tjejer att jag drog dom i h\xE5ret. Det \xE4r roligt att se hur det har f\xF6r\xE4ndrats.
Jag hoppas att du \xE4r lika ironisk som mig, d\xE5 kommer vi att g\xE5 ihop!`,
      picture: 'assets/profilepics/4.png'
    },
    {
      id: '5',
      name: 'Martin',
      age: '22',
      interests: ['Inredning', 'Filateli'],
      biography: `F\xF6rest\xE4ll dig, att vi \xE4r p\xE5 dejt. Vi \xE4r p\xE5 en klassisk restaurang som jag valde och sen g\xE5r vi ut p\xE5 en drink. Efter ett par drinkar s\xE5 \xE4r jag lite full och vi g\xE5r tillbaka mot min bil. Bilen brinner. Du \xE4r chockad och redo att ringa 112.
Du tittar p\xE5 mig , jag har tv\xE5 marshmallows p\xE5 en pinne, redo f\xF6r grillning och mer alkohol. Du rodnar, vi myser tillsammans medans min brinnande bil h\xE5ller oss varma. Vi sk\xE4mtar och skrattar, du \xE4r p\xE5 v\xE4g att g\xE5 in f\xF6r en kyss\u2026 Jag kastar kloroform p\xE5 dig och r\xE5nar sen dig. Det var inte ens min bil som brann.`,
      picture: 'assets/profilepics/5.png'
    },
    {
      id: '6',
      name: 'Lovisa',
      age: '19',
      interests: ['Fotografi', 'Krav Maga', 'lyssna p\xE5 musik'],
      biography: `Ett p\xE5st\xE5ende st\xE4mmer inte, gissar du r\xE4tt bjuder jag p\xE5 tequila:
- Jag har hoppat fallsk\xE4rm
- Jag har dykt med hajar
- Min hund \xE4r adopterad`,
      picture: 'assets/profilepics/6.png'
    },
    {
      id: '7',
      name: 'Simon',
      age: '31',
      interests: ['Flyga privatjet', 'Festa', 'Leva livet'],
      biography:
        'Son till Lev Leviev, tro inte p\xE5 alla l\xF6gner som cirkulerar om mig.',
      picture: 'assets/profilepics/7.png'
    },
    {
      id: '8',
      name: 'Maja',
      age: '18',
      interests: ['Skriva noveller', 'Vindsurfing'],
      biography: 'Jag \xE4r bara h\xE4r f\xF6r att tr\xE4ffa v\xE4nner.',
      picture: 'assets/profilepics/8.png'
    },
    {
      id: '9',
      name: 'Tova',
      age: '23',
      interests: ['Sjunga', 'Bungee jumping'],
      biography: `Skicka in din ans\xF6kan med personligt brev och CV till epostadress@gmail.com med en motivering till varf\xF6r du tror att vi skulle vara en bra match. Jag ser fram emot att g\xE5 igenom din ans\xF6kan och kommer svara inom 3-5 arbetsdagar, men f\xF6rmodligen inom en timme pga jag \xE4r desperat.
Jag skojar inte, g\xF6r det.`,
      picture: 'assets/profilepics/9.png'
    },
    {
      id: '10',
      name: 'Karin',
      age: '22',
      interests: ['Blogga', 'H\xE4lsokost', 'Skapa nya recept'],
      biography: `Sn\xE4lla hj\xE4lp mig att fylla ut min sista mening med ett tredje ord.
Jag \xE4lskar .......`,
      picture: 'assets/profilepics/10.png'
    },
    {
      id: '11',
      name: 'David',
      age: '19',
      interests: ['Spela gitarr', 'Motocross'],
      biography: `Jag har h\xF6rt att tjejer brukar gilla killar som \xE4r bad boys?
Du kan vara lugn, jag \xE4r d\xE5lig p\xE5 allt.
Vill du l\xE4ra k\xE4nna mig mer s\xE5 kan du fr\xE5ga mig varf\xF6r jag har Tinder.`,
      picture: 'assets/profilepics/11.png'
    },
    {
      id: '12',
      name: 'Mikaela',
      age: '30',
      interests: ['Teckna', 'Dykning'],
      biography: `Anledningar att dejta mig:
\u2022Jag kan best\xE4lla pizza
\u2022Jag l\xE5ter dig v\xE4lja film
\u2022Jag kan t\xE4nka mig att diska ibland`,
      picture: 'assets/profilepics/12.png'
    },
    {
      id: '13',
      name: 'Henrik',
      age: '37',
      interests: ['Spela tv-spel', 'Segling'],
      biography: `F\xF6rdel: Jag f\xE5r ofta komplimanger f\xF6r mitt utseende
Nackdel: Det \xE4r alltid fr\xE5n min mamma
F\xF6rdel: Jag har en kaffemaskin
Nackdel: Jag dricker inte kaffe
F\xF6rdel: Jag \xE4r v\xE4ldigt lik din nya pojkv\xE4n
Nackdel: Jag har en tvillingbror`,
      picture: 'assets/profilepics/13.png'
    },
    {
      id: '14',
      name: 'Casper',
      age: '21',
      interests: ['Dansa', 'Yoga'],
      biography: `Min djupaste hemlighet:
Jag \xE4r oskuld`,
      picture: 'assets/profilepics/14.png'
    },
    {
      id: '15',
      name: 'Elin',
      age: '34',
      interests: ['Djur', 'Folkrace', 'Organisera hemma'],
      biography: `Vill du veta min st\xF6rsta hemlighet i livet?
Ge en tumme upp och skriv s\xE5 kanske du f\xE5r veta.`,
      picture: 'assets/profilepics/15.png'
    },
    {
      id: '16',
      name: 'Per',
      age: '31',
      interests: ['M\xE5la', '\xC5ka slalom', 'Meka med bilen'],
      biography: `F\xF6rdelar:
Kan g\xF6ra eld med tv\xE5 pinnar (och t\xE4ndstickor)
Gillar romantiska komedier
Nackdelar:
Inte Danny Saucedo
Mitt kladdkakerecept kommer f\xF6rst\xF6ra din h\xE4lsa`,
      picture: 'assets/profilepics/16.png'
    },
    {
      id: '17',
      name: 'Thomas',
      age: '24',
      interests: ['Kolla p\xE5 film', 'Snickra'],
      biography: `Sant eller falskt:
Jag \xE4r l\xE4ngre \xE4n dig
Jag har rest till fler l\xE4nder \xE4n dig
Jag kan s\xE4nka fler shots \xE4n dig
Jag sover l\xE4ngre \xE4n dig`,
      picture: 'assets/profilepics/17.png'
    },
    {
      id: '18',
      name: 'Kajsa',
      age: '26',
      interests: [
        'Mata sm\xE5f\xE5glar',
        'Kolla p\xE5 fotboll',
        'Kolla p\xE5 ishockey'
      ],
      biography: `Min dr\xF6m \xE4r att flytta ut p\xE5 landet och leva med naturen, jag \xE4r v\xE4ldigt spirituell.
Vad \xE4r din dr\xF6m?`,
      picture: 'assets/profilepics/18.png'
    },
    {
      id: '19',
      name: 'Amelia',
      age: '32',
      interests: ['Instagram', 'Meditera'],
      biography: 'Jag har inga barn.',
      picture: 'assets/profilepics/19.png'
    },
    {
      id: '20',
      name: 'Elisa',
      age: '22',
      interests: ['Kort- och br\xE4dspel', 'Jakt och fiske'],
      biography:
        'Jag praktiserar s\xE4kert samlag. Jag knyter fast dig i s\xE4ngen s\xE5 du inte ramlar av.',
      picture: 'assets/profilepics/20.png'
    },
    {
      id: '21',
      name: 'Johannes',
      age: '24',
      interests: ['Odla gr\xF6nsaker', 'L\xE4ngdskid\xE5kning'],
      biography: `F\xF6rdelar:
\xD6ppen till att dela mitt Netflixkonto
Kan \xE4ta 30 sushibitar i en sittning
\xC4r inte beroende av heroin
Nackdelar:
Anv\xE4nder sarkasm som en f\xF6rsvarsmekanism
Nattuggla
Kommer \xE4ta 30 sushibitar i en sittning`,
      picture: 'assets/profilepics/21.png'
    },
    {
      id: '22',
      name: 'Patrik',
      age: '29',
      interests: [
        'M\xE5la keramik',
        'Laga mat',
        'Geo-tagging',
        'Skriva haikun'
      ],
      biography: `Patrik \xE4r en riktig toppengrabb! - mormor

Den tjej som f\xE5r Patrik kan skatta sig lycklig! - mamma`,
      picture: 'assets/profilepics/22.png'
    }
  ],
  Rt = 'assets/thumb-up.c44e7c4d.svg',
  Ut = 'assets/thumb-down.06c5185a.svg',
  At = 'assets/icon.b9db2756.png'
const Kt = {
    components: { ResponsiveNavigation: $ },
    data() {
      return {
        users: Ht,
        counter: 600,
        favorites: [],
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ]
      }
    },
    created() {
      setInterval(() => {
        this.counter--, this.counter < 1 && ((this.counter = 600), this.onNo())
      }, 10)
    },
    methods: {
      onYes() {
        this.favorites.push({ id: this.users[0].id }),
          this.users.splice(0, 1),
          (this.counter = 600)
        var t = JSON.parse(localStorage.getItem('favoritedProfiles'))
        t === null && (t = [])
        var s = this.users[0].id - 1,
          d = { id: s }
        if (t.some((p) => p.id === s)) {
          console.log('Finns redan')
          return
        } else
          t.push(d),
            localStorage.setItem('favoritedProfiles', JSON.stringify(t))
      },
      onNo() {
        this.users.splice(0, 1), (this.counter = 600)
      },
      goHome() {
        this.favorites.push(this.users[0]), this.users.splice(0, 1)
      }
    }
  },
  E = (t) => (k('data-v-f2c1ceba'), (t = t()), b(), t),
  Ot = E(() => e('h2', null, 'B\xF6rja dejta', -1)),
  qt = { key: 0, class: 'container' },
  Gt = { class: 'profilepic' },
  Qt = ['src'],
  zt = { class: 'bar' },
  Xt = { class: 'loading-bar' },
  Yt = { class: 'info' },
  Wt = { class: 'buttons' },
  Zt = { key: 1, class: 'container' },
  es = E(() => e('p', null, 'Du har g\xE5tt igenom alla profiler!', -1)),
  ts = E(() => e('br', null, null, -1)),
  ss = E(() => e('img', { class: 'logo', src: At }, null, -1)),
  is = _('\xC5terv\xE4nd till start')
function ns(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        Ot,
        i.users.length > 0
          ? (r(),
            o('div', qt, [
              e('div', Gt, [
                e(
                  'img',
                  {
                    id: 'profile-picture',
                    src: i.users[0].picture,
                    alt: 'Profile picture'
                  },
                  null,
                  8,
                  Qt
                )
              ]),
              e('div', zt, [
                e('div', Xt, [
                  e(
                    'div',
                    {
                      class: 'percentage',
                      style: j({ width: this.counter / 6 + '%' })
                    },
                    null,
                    4
                  )
                ])
              ]),
              e('div', Yt, [
                e(
                  'h2',
                  null,
                  g(i.users[0].name) + ', ' + g(i.users[0].age) + ' \xE5r',
                  1
                ),
                e('p', null, g(i.users[0].biography), 1)
              ]),
              e('div', Wt, [
                e('img', {
                  class: 'butt',
                  src: Rt,
                  onClick: s[0] || (s[0] = (...h) => n.onYes && n.onYes(...h))
                }),
                e('img', {
                  class: 'butt',
                  src: Ut,
                  onClick: s[1] || (s[1] = (...h) => n.onNo && n.onNo(...h))
                })
              ])
            ]))
          : (r(),
            o('div', Zt, [
              es,
              ts,
              ss,
              u(
                a,
                { class: 'routerlink', to: '/lounge' },
                { default: f(() => [is]), _: 1 }
              )
            ]))
      ],
      64
    )
  )
}
var as = v(Kt, [
    ['render', ns],
    ['__scopeId', 'data-v-f2c1ceba']
  ]),
  w = [
    {
      id: '1',
      name: 'Anders',
      age: '31',
      interests: ['Sl\xE4ktforska', 'Springa maratonlopp'],
      biography: `Nuvarande relationsstatus:
Gjorde middag f\xF6r tv\xE5. \xC5t upp b\xE5da.`,
      picture: 'assets/profilepics/1.png'
    },
    {
      id: '2',
      name: 'Johanna',
      age: '27',
      interests: ['L\xE4sa', 'Resa', 'H\xE4lsokost'],
      biography: 'Hur m\xE5nga pudlar har vi inom 10 \xE5r?',
      picture: 'assets/profilepics/2.png'
    },
    {
      id: '3',
      name: 'Erika',
      age: '24',
      interests: ['Smyckestillverkning', '\xC5tervinning'],
      biography: `Om mig:
\u2022Jag r\xE4ddade min syster fr\xE5n att krocka n\xE4r hon \xF6vningsk\xF6rde
\u2022Jag har varit i fler \xE4n 20 + l\xE4nder
\u2022Expert p\xE5 att mysa
\u2022Brunetter f\xE5r mig att bli kn\xE4svag
\u2022I framtiden vill jag bo i ett slott med 3 barn och katt

Oj, missade! vill s\xE5 klart g\xE5 p\xE5 en dejt ocks\xE5.`,
      picture: 'assets/profilepics/3.png'
    },
    {
      id: '4',
      name: 'Carl',
      age: '34',
      interests: ['Glasbl\xE5sning', 'Body building', 'Biodling'],
      biography: `L\xE4s inte det h\xE4r\u2026
N\xE4r jag gick i 3:an hatade tjejer att jag drog dom i h\xE5ret. Det \xE4r roligt att se hur det har f\xF6r\xE4ndrats.
Jag hoppas att du \xE4r lika ironisk som mig, d\xE5 kommer vi att g\xE5 ihop!`,
      picture: 'assets/profilepics/4.png'
    },
    {
      id: '5',
      name: 'Martin',
      age: '22',
      interests: ['Inredning', 'Filateli'],
      biography: `F\xF6rest\xE4ll dig, att vi \xE4r p\xE5 dejt. Vi \xE4r p\xE5 en klassisk restaurang som jag valde och sen g\xE5r vi ut p\xE5 en drink. Efter ett par drinkar s\xE5 \xE4r jag lite full och vi g\xE5r tillbaka mot min bil. Bilen brinner. Du \xE4r chockad och redo att ringa 112.
Du tittar p\xE5 mig , jag har tv\xE5 marshmallows p\xE5 en pinne, redo f\xF6r grillning och mer alkohol. Du rodnar, vi myser tillsammans medans min brinnande bil h\xE5ller oss varma. Vi sk\xE4mtar och skrattar, du \xE4r p\xE5 v\xE4g att g\xE5 in f\xF6r en kyss\u2026 Jag kastar kloroform p\xE5 dig och r\xE5nar sen dig. Det var inte ens min bil som brann.`,
      picture: 'assets/profilepics/5.png'
    },
    {
      id: '6',
      name: 'Lovisa',
      age: '19',
      interests: ['Fotografi', 'Krav Maga', 'lyssna p\xE5 musik'],
      biography: `Ett p\xE5st\xE5ende st\xE4mmer inte, gissar du r\xE4tt bjuder jag p\xE5 tequila:
- Jag har hoppat fallsk\xE4rm
- Jag har dykt med hajar
- Min hund \xE4r adopterad`,
      picture: 'assets/profilepics/6.png'
    },
    {
      id: '7',
      name: 'Simon',
      age: '31',
      interests: ['Flyga privatjet', 'Festa', 'Leva livet'],
      biography:
        'Son till Lev Leviev, tro inte p\xE5 alla l\xF6gner som cirkulerar om mig.',
      picture: 'assets/profilepics/7.png'
    },
    {
      id: '8',
      name: 'Maja',
      age: '18',
      interests: ['Skriva noveller', 'Vindsurfing'],
      biography: 'Jag \xE4r bara h\xE4r f\xF6r att tr\xE4ffa v\xE4nner.',
      picture: 'assets/profilepics/8.png'
    },
    {
      id: '9',
      name: 'Tova',
      age: '23',
      interests: ['Sjunga', 'Bungee jumping'],
      biography: `Skicka in din ans\xF6kan med personligt brev och CV till epostadress@gmail.com med en motivering till varf\xF6r du tror att vi skulle vara en bra match. Jag ser fram emot att g\xE5 igenom din ans\xF6kan och kommer svara inom 3-5 arbetsdagar, men f\xF6rmodligen inom en timme pga jag \xE4r desperat.
Jag skojar inte, g\xF6r det.`,
      picture: 'assets/profilepics/9.png'
    },
    {
      id: '10',
      name: 'Karin',
      age: '22',
      interests: ['Blogga', 'H\xE4lsokost', 'Skapa nya recept'],
      biography: `Sn\xE4lla hj\xE4lp mig att fylla ut min sista mening med ett tredje ord.
Jag \xE4lskar .......`,
      picture: 'assets/profilepics/10.png'
    },
    {
      id: '11',
      name: 'David',
      age: '19',
      interests: ['Spela gitarr', 'Motocross'],
      biography: `Jag har h\xF6rt att tjejer brukar gilla killar som \xE4r bad boys?
Du kan vara lugn, jag \xE4r d\xE5lig p\xE5 allt.
Vill du l\xE4ra k\xE4nna mig mer s\xE5 kan du fr\xE5ga mig varf\xF6r jag har Tinder.`,
      picture: 'assets/profilepics/11.png'
    },
    {
      id: '12',
      name: 'Mikaela',
      age: '30',
      interests: ['Teckna', 'Dykning'],
      biography: `Anledningar att dejta mig:
\u2022Jag kan best\xE4lla pizza
\u2022Jag l\xE5ter dig v\xE4lja film
\u2022Jag kan t\xE4nka mig att diska ibland`,
      picture: 'assets/profilepics/12.png'
    },
    {
      id: '13',
      name: 'Henrik',
      age: '37',
      interests: ['Spela tv-spel', 'Segling'],
      biography: `F\xF6rdel: Jag f\xE5r ofta komplimanger f\xF6r mitt utseende
Nackdel: Det \xE4r alltid fr\xE5n min mamma
F\xF6rdel: Jag har en kaffemaskin
Nackdel: Jag dricker inte kaffe
F\xF6rdel: Jag \xE4r v\xE4ldigt lik din nya pojkv\xE4n
Nackdel: Jag har en tvillingbror`,
      picture: 'assets/profilepics/13.png'
    },
    {
      id: '14',
      name: 'Casper',
      age: '21',
      interests: ['Dansa', 'Yoga'],
      biography: `Min djupaste hemlighet:
Jag \xE4r oskuld`,
      picture: 'assets/profilepics/14.png'
    },
    {
      id: '15',
      name: 'Elin',
      age: '34',
      interests: ['Djur', 'Folkrace', 'Organisera hemma'],
      biography: `Vill du veta min st\xF6rsta hemlighet i livet?
Ge en tumme upp och skriv s\xE5 kanske du f\xE5r veta.`,
      picture: 'assets/profilepics/15.png'
    },
    {
      id: '16',
      name: 'Per',
      age: '31',
      interests: ['M\xE5la', '\xC5ka slalom', 'Meka med bilen'],
      biography: `F\xF6rdelar:
Kan g\xF6ra eld med tv\xE5 pinnar (och t\xE4ndstickor)
Gillar romantiska komedier
Nackdelar:
Inte Danny Saucedo
Mitt kladdkakerecept kommer f\xF6rst\xF6ra din h\xE4lsa`,
      picture: 'assets/profilepics/16.png'
    },
    {
      id: '17',
      name: 'Thomas',
      age: '24',
      interests: ['Kolla p\xE5 film', 'Snickra'],
      biography: `Sant eller falskt:
Jag \xE4r l\xE4ngre \xE4n dig
Jag har rest till fler l\xE4nder \xE4n dig
Jag kan s\xE4nka fler shots \xE4n dig
Jag sover l\xE4ngre \xE4n dig`,
      picture: 'assets/profilepics/17.png'
    },
    {
      id: '18',
      name: 'Kajsa',
      age: '26',
      interests: [
        'Mata sm\xE5f\xE5glar',
        'Kolla p\xE5 fotboll',
        'Kolla p\xE5 ishockey'
      ],
      biography: `Min dr\xF6m \xE4r att flytta ut p\xE5 landet och leva med naturen, jag \xE4r v\xE4ldigt spirituell.
Vad \xE4r din dr\xF6m?`,
      picture: 'assets/profilepics/18.png'
    },
    {
      id: '19',
      name: 'Amelia',
      age: '32',
      interests: ['Instagram', 'Meditera'],
      biography: 'Jag har inga barn.',
      picture: 'assets/profilepics/19.png'
    },
    {
      id: '20',
      name: 'Elisa',
      age: '22',
      interests: ['Kort- och br\xE4dspel', 'Jakt och fiske'],
      biography:
        'Jag praktiserar s\xE4kert samlag. Jag knyter fast dig i s\xE4ngen s\xE5 du inte ramlar av.',
      picture: 'assets/profilepics/20.png'
    },
    {
      id: '21',
      name: 'Johannes',
      age: '24',
      interests: ['Odla gr\xF6nsaker', 'L\xE4ngdskid\xE5kning'],
      biography: `F\xF6rdelar:
\xD6ppen till att dela mitt Netflixkonto
Kan \xE4ta 30 sushibitar i en sittning
\xC4r inte beroende av heroin
Nackdelar:
Anv\xE4nder sarkasm som en f\xF6rsvarsmekanism
Nattuggla
Kommer \xE4ta 30 sushibitar i en sittning`,
      picture: 'assets/profilepics/21.png'
    },
    {
      id: '22',
      name: 'Patrik',
      age: '29',
      interests: [
        'M\xE5la keramik',
        'Laga mat',
        'Geo-tagging',
        'Skriva haikun'
      ],
      biography: `Patrik \xE4r en riktig toppengrabb! - mormor

Den tjej som f\xE5r Patrik kan skatta sig lycklig! - mamma`,
      picture: 'assets/profilepics/22.png'
    }
  ]
const rs = {
    data() {
      return {
        users: w,
        profileId: this.$route.params.profileid - 1,
        newArray: [],
        bot: [],
        convo: [],
        answer: 'Hej ' + this.$store.state.user + '!',
        answer2: 'Hur m\xE5r du?',
        answer3: 'H\xE4rligt! Vill du ses p\xE5 en fika?',
        messages: ''
      }
    },
    created() {
      if (localStorage.getItem('chosenQuestion')) {
        let t = localStorage.getItem('chosenQuestion')
        t.length &&
          ((this.messages = t),
          this.chatMessages(),
          localStorage.removeItem('chosenQuestion'))
      }
    },
    methods: {
      sendChat() {
        this.chatMessages()
      },
      chatMessages() {
        this.convo.push(this.messages),
          console.log(this.convo),
          setTimeout(this.chatBot, 3100),
          setTimeout(this.chatBot2, 5e3),
          setTimeout(this.chatBot3, 3e3),
          (this.messages = '')
      },
      chatBot() {
        this.newArray < 1 && (this.bot.push(this.answer), console.log(this.bot))
      },
      chatBot2() {
        this.newArray < 1 && this.bot.push(this.answer2)
      },
      chatBot3() {
        this.convo.length > 1 &&
          (this.newArray.push(this.answer3),
          (this.bot = []),
          (this.answer2 = null),
          console.log(this.newArray),
          console.log(this.bot))
      }
    }
  },
  os = (t) => (k('data-v-724f340e'), (t = t()), b(), t),
  ls = { id: 'wrapper' },
  ds = { id: 'mainChat' },
  us = ['src'],
  cs = os(() => e('h3', null, 'Meddelanden', -1)),
  ps = { id: 'icebreaker' },
  gs = _('Icebreaker-fr\xE5gor'),
  hs = { id: 'chatBubble' },
  ms = { id: 'list2' },
  _s = { id: 'chatAnswers' },
  fs = { id: 'list3' },
  vs = { id: 'chatAnswers' },
  ks = { id: 'list1' },
  bs = { id: 'chatMessage' },
  ys = { id: 'inputs' }
function $s(t, s, d, p, i, n) {
  const l = c('router-link')
  return (
    r(),
    o('div', ls, [
      e('div', ds, [
        e(
          'img',
          {
            id: 'chatImg',
            width: '50',
            src: i.users[i.profileId].picture,
            alt: ''
          },
          null,
          8,
          us
        ),
        cs,
        e('div', ps, [
          e('p', null, [
            u(
              l,
              {
                to: '/icebreaker/' + this.$route.params.profileid,
                id: 'icebreaker'
              },
              { default: f(() => [gs]), _: 1 },
              8,
              ['to']
            )
          ])
        ]),
        e('div', hs, [
          (r(!0),
          o(
            m,
            null,
            y(
              this.bot,
              (a) => (
                r(), o('ul', { key: a }, [e('li', ms, [e('p', _s, g(a), 1)])])
              )
            ),
            128
          )),
          (r(!0),
          o(
            m,
            null,
            y(
              this.newArray,
              (a) => (
                r(), o('ul', { key: a }, [e('li', fs, [e('p', vs, g(a), 1)])])
              )
            ),
            128
          )),
          (r(!0),
          o(
            m,
            null,
            y(
              this.convo,
              (a) => (
                r(), o('ul', { key: a }, [e('li', ks, [e('p', bs, g(a), 1)])])
              )
            ),
            128
          ))
        ]),
        e('div', ys, [
          S(
            e(
              'input',
              {
                id: 'chatInput',
                'onUpdate:modelValue': s[0] || (s[0] = (a) => (i.messages = a)),
                type: 'text'
              },
              null,
              512
            ),
            [[I, i.messages]]
          ),
          e(
            'input',
            {
              onClick: s[1] || (s[1] = (a) => n.chatMessages()),
              onKeydown: s[2] || (s[2] = H((a) => n.chatMessages(), ['enter'])),
              type: 'button',
              id: 'button',
              value: 'Skicka!'
            },
            null,
            32
          )
        ])
      ])
    ])
  )
}
var Vs = v(rs, [
  ['render', $s],
  ['__scopeId', 'data-v-724f340e']
])
const ws = {
  components: { ResponsiveNavigation: $, ChatComponent: Vs },
  data() {
    return {
      navLinks: [
        { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
        { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
        { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
        { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
        { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
        { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
      ]
    }
  }
}
function xs(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('ChatComponent')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        u(a)
      ],
      64
    )
  )
}
var Ss = v(ws, [['render', xs]])
const Is = {
    components: { ResponsiveNavigation: $ },
    data() {
      return {
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: w,
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ]
      }
    }
  },
  D = (t) => (k('data-v-58b13ac1'), (t = t()), b(), t),
  js = D(() => e('h2', null, 'Favoritprofiler', -1)),
  Cs = { key: 0, id: 'profiles-container' },
  Ls = ['src'],
  Es = { class: 'profile-information' },
  Ns = { class: 'name-age' },
  Bs = { class: 'read-more' },
  Js = _('Visa mer...'),
  Ms = { key: 1, id: 'no-favorites-container' },
  Ds = D(() => e('p', null, 'Du har inga favoriter \xE4nnu.', -1)),
  Ps = [Ds]
function Fs(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        js,
        i.users
          ? (r(),
            o('div', Cs, [
              (r(!0),
              o(
                m,
                null,
                y(
                  i.users,
                  (h) => (
                    r(),
                    o('div', { class: 'profile-card', key: h.id }, [
                      u(
                        a,
                        { class: 'link-style', to: '/favorite/' + h.id },
                        {
                          default: f(() => [
                            e(
                              'img',
                              {
                                src: i.usersData[h.id - 1].picture,
                                alt: 'Profile picture',
                                class: 'profile-picture2'
                              },
                              null,
                              8,
                              Ls
                            )
                          ]),
                          _: 2
                        },
                        1032,
                        ['to']
                      ),
                      e('div', Es, [
                        e('div', Ns, [
                          e('p', null, g(i.usersData[h.id - 1].name), 1),
                          e(
                            'p',
                            null,
                            g(i.usersData[h.id - 1].age) + ' \xE5r',
                            1
                          )
                        ]),
                        e('p', Bs, [
                          u(
                            a,
                            { class: 'link-style', to: '/favorite/' + h.id },
                            { default: f(() => [Js]), _: 2 },
                            1032,
                            ['to']
                          )
                        ])
                      ])
                    ])
                  )
                ),
                128
              ))
            ]))
          : (r(), o('div', Ms, Ps))
      ],
      64
    )
  )
}
var Ts = v(Is, [
  ['render', Fs],
  ['__scopeId', 'data-v-58b13ac1']
])
const Hs = {
    components: { ResponsiveNavigation: $ },
    data() {
      return {
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ],
        users: w,
        profileId: this.$route.params.profileid - 1,
        interests: w[this.$route.params.profileid - 1].interests,
        buttonClicked: !1,
        buttonNotClicked: !0,
        blocked: []
      }
    },
    methods: {
      blockButton() {
        ;(this.buttonClicked = !0),
          (this.buttonNotClicked = !1),
          this.$store.commit('setButton', this.buttonClicked)
      },
      unblockButton() {
        ;(this.buttonClicked = !1),
          (this.buttonNotClicked = !0),
          this.$store.commit('setButton', this.buttonClicked)
      }
    }
  },
  Rs = (t) => (k('data-v-cded42cc'), (t = t()), b(), t),
  Us = { id: 'profile-container' },
  As = { id: 'left-side' },
  Ks = ['src'],
  Os = { class: 'name-age' },
  qs = { id: 'right-side' },
  Gs = { id: 'right-top' },
  Qs = { class: 'interests-container' },
  zs = Rs(() =>
    e('p', { class: 'profile-header' }, 'Intressen & Hobbies:', -1)
  ),
  Xs = { class: 'profile-header bio' },
  Ys = { class: 'to-messages' }
function Ws(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        e('div', Us, [
          e('div', As, [
            e(
              'img',
              {
                src: i.users[i.profileId].picture,
                alt: 'Profile picture',
                class: 'profile-picture'
              },
              null,
              8,
              Ks
            ),
            e('div', Os, [
              e('h1', null, g(i.users[i.profileId].name), 1),
              e('h1', null, g(i.users[i.profileId].age) + ' \xE5r', 1)
            ])
          ]),
          e('div', qs, [
            e('div', Gs, [
              i.buttonNotClicked
                ? (r(),
                  o(
                    'button',
                    {
                      key: 0,
                      class: 'block-button',
                      onClick:
                        s[0] ||
                        (s[0] = (...h) => n.blockButton && n.blockButton(...h))
                    },
                    ' block '
                  ))
                : (r(),
                  o(
                    'button',
                    {
                      key: 1,
                      class: 'block-button',
                      onClick:
                        s[1] ||
                        (s[1] = (...h) =>
                          n.unblockButton && n.unblockButton(...h))
                    },
                    ' unblock '
                  ))
            ]),
            e('div', Qs, [
              zs,
              e('ul', null, [
                (r(!0),
                o(
                  m,
                  null,
                  y(
                    i.interests,
                    (h) => (
                      r(),
                      o('li', { class: 'interests', key: h.length }, g(h), 1)
                    )
                  ),
                  128
                ))
              ])
            ]),
            e('p', Xs, g(i.users[i.profileId].biography), 1),
            e('p', Ys, [
              i.buttonNotClicked
                ? (r(),
                  N(
                    a,
                    {
                      key: 0,
                      class: 'routerlink',
                      to: '/chat/' + this.$route.params.profileid
                    },
                    {
                      default: f(() => [
                        _(
                          'Skicka meddelande till ' +
                            g(i.users[i.profileId].name),
                          1
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['to']
                  ))
                : (r(),
                  N(
                    a,
                    {
                      key: 1,
                      class: 'routerlink-disabled',
                      to: '/chat/' + this.$route.params.profileid
                    },
                    {
                      default: f(() => [
                        _('Du har blockat ' + g(i.users[i.profileId].name), 1)
                      ]),
                      _: 1
                    },
                    8,
                    ['to']
                  ))
            ])
          ])
        ])
      ],
      64
    )
  )
}
var Zs = v(Hs, [
    ['render', Ws],
    ['__scopeId', 'data-v-cded42cc']
  ]),
  ei = 'assets/arrow-left.556b6f96.svg',
  ti = 'assets/arrow-right.0eb02812.svg'
const si = {
    data() {
      return {
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: w,
        innerStyles: {},
        step: '',
        transitioning: !1
      }
    },
    mounted() {
      this.setStep(), this.resetTranslate()
    },
    methods: {
      setStep() {
        const t = this.$refs.inner.scrollWidth
        if (this.users) {
          const s = this.users.length
          this.step = `${t / s}px`
        } else {
          const s = 1
          this.step = `${t / s}px`
        }
      },
      next() {
        this.transitioning ||
          ((this.transitioning = !0),
          this.moveLeft(),
          this.afterTransition(() => {
            const t = this.users.shift()
            this.users.push(t), this.resetTranslate(), (this.transitioning = !1)
          }))
      },
      prev() {
        this.transitioning ||
          ((this.transitioning = !0),
          this.moveRight(),
          this.afterTransition(() => {
            const t = this.users.pop()
            this.users.unshift(t),
              this.resetTranslate(),
              (this.transitioning = !1)
          }))
      },
      moveLeft() {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(-${this.step})`
        }
      },
      moveRight() {
        this.innerStyles = {
          transform: `translateX(${this.step})
                      translateX(-${this.step})`
        }
      },
      afterTransition(t) {
        const s = () => {
          t(), this.$refs.inner.removeEventListener('transitionend', s)
        }
        this.$refs.inner.addEventListener('transitionend', s)
      },
      resetTranslate() {
        this.innerStyles = {
          transition: 'none',
          transform: `translateX(-${this.step})`
        }
      }
    }
  },
  ii = { class: 'carousel' },
  ni = ['src'],
  ai = { class: 'button-container' }
function ri(t, s, d, p, i, n) {
  const l = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        e('div', ii, [
          e(
            'div',
            { class: 'inner', ref: 'inner', style: j(i.innerStyles) },
            [
              (r(!0),
              o(
                m,
                null,
                y(
                  i.users,
                  (a) => (
                    r(),
                    o('div', { class: 'card', key: a.id }, [
                      u(
                        l,
                        { class: 'link-style', to: '/favorite/' + a.id },
                        {
                          default: f(() => [
                            e(
                              'img',
                              {
                                src: i.usersData[a.id - 1].picture,
                                alt: 'Profile picture',
                                class: 'profile-picture2'
                              },
                              null,
                              8,
                              ni
                            )
                          ]),
                          _: 2
                        },
                        1032,
                        ['to']
                      )
                    ])
                  )
                ),
                128
              ))
            ],
            4
          )
        ]),
        e('div', ai, [
          e('img', {
            onClick: s[0] || (s[0] = (...a) => n.prev && n.prev(...a)),
            src: ei,
            width: '30'
          }),
          e('img', {
            onClick: s[1] || (s[1] = (...a) => n.next && n.next(...a)),
            src: ti,
            width: '30'
          })
        ])
      ],
      64
    )
  )
}
var oi = v(si, [
    ['render', ri],
    ['__scopeId', 'data-v-396f7d04']
  ]),
  li = 'assets/no-profile-pic.9ef7f289.png'
const di = {},
  P = (t) => (k('data-v-2d125cfd'), (t = t()), b(), t),
  ui = { id: 'profile-container' },
  ci = { id: 'left-side' },
  pi = { class: 'welcome' },
  gi = { key: 0 },
  hi = { key: 1 },
  mi = ['src'],
  _i = { key: 1, src: li, alt: 'Profile picture', class: 'profile-picture' },
  fi = { class: 'name-age' },
  vi = { key: 0 },
  ki = { key: 1 },
  bi = { id: 'right-side' },
  yi = { id: 'right-top' },
  $i = _('edit profile'),
  Vi = { class: 'interests-container' },
  wi = P(() => e('p', { class: 'profile-header' }, 'Intressen & Hobbies:', -1)),
  xi = { key: 0 },
  Si = { key: 1 },
  Ii = P(() => e('li', { class: 'interests' }, 'No interests added.', -1)),
  ji = [Ii],
  Ci = { key: 0, class: 'profile-header bio' },
  Li = { key: 1, class: 'profile-header bio' },
  Ei = { class: 'to-messages' },
  Ni = _('B\xF6rja dejta')
function Bi(t, s) {
  const d = c('router-link')
  return (
    r(),
    o('div', ui, [
      e('div', ci, [
        e('div', pi, [
          this.$store.state.user.length
            ? (r(),
              o(
                'h1',
                gi,
                ' V\xE4lkommen, ' + g(this.$store.state.user) + '! ',
                1
              ))
            : (r(), o('h1', hi, 'V\xE4lkommen, (inget anv\xE4ndarnamn)!'))
        ]),
        this.$store.state.picture.length
          ? (r(),
            o(
              'img',
              {
                key: 0,
                src: this.$store.state.picture,
                alt: 'Profile picture',
                class: 'profile-picture'
              },
              null,
              8,
              mi
            ))
          : (r(), o('img', _i)),
        e('div', fi, [
          this.$store.state.name.length
            ? (r(),
              o(
                'h3',
                vi,
                g(this.$store.state.name) +
                  ', ' +
                  g(this.$store.state.age) +
                  ' \xE5r ',
                1
              ))
            : (r(), o('h3', ki, 'Inget namn, ingen \xE5lder ifylld.'))
        ])
      ]),
      e('div', bi, [
        e('div', yi, [u(d, { to: '/edit' }, { default: f(() => [$i]), _: 1 })]),
        e('div', Vi, [
          wi,
          this.$store.state.interests.length
            ? (r(),
              o('ul', xi, [
                (r(!0),
                o(
                  m,
                  null,
                  y(
                    this.$store.state.interests.split(','),
                    (p) => (
                      r(),
                      o('li', { class: 'interests', key: p.length }, g(p), 1)
                    )
                  ),
                  128
                ))
              ]))
            : (r(), o('ul', Si, ji))
        ]),
        this.$store.state.biography.length
          ? (r(), o('p', Ci, g(this.$store.state.biography), 1))
          : (r(), o('p', Li, 'Biografi inte ifylld.')),
        e('p', Ei, [
          u(
            d,
            { class: 'routerlink', to: '/date' },
            { default: f(() => [Ni]), _: 1 }
          )
        ])
      ])
    ])
  )
}
var Ji = v(di, [
  ['render', Bi],
  ['__scopeId', 'data-v-2d125cfd']
])
const Mi = {
    components: {
      ResponsiveNavigation: $,
      FavouritesCarousel: oi,
      ProfileComponent: Ji
    },
    data() {
      return {
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ]
      }
    }
  },
  F = (t) => (k('data-v-5f50bb5c'), (t = t()), b(), t),
  Di = F(() => e('h2', null, 'Lounge', -1)),
  Pi = { class: 'lounge-container' },
  Fi = { class: 'favorites' },
  Ti = F(() => e('h2', null, 'Dina senaste favoriter', -1))
function Hi(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('ProfileComponent'),
    h = c('FavouritesCarousel')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        Di,
        u(a),
        e('div', Pi, [e('div', Fi, [Ti, u(h)])])
      ],
      64
    )
  )
}
var Ri = v(Mi, [
  ['render', Hi],
  ['__scopeId', 'data-v-5f50bb5c']
])
const Ui = {
    data() {
      return {
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: w,
        profileId: this.$route.params.profileid - 1
      }
    }
  },
  J = (t) => (k('data-v-80bf3c6e'), (t = t()), b(), t),
  Ai = { key: 0, id: 'wrapper' },
  Ki = J(() =>
    e('div', { id: 'messageBox' }, [e('h3', null, 'Meddelanden')], -1)
  ),
  Oi = { class: 'dateList' },
  qi = ['src'],
  Gi = { key: 1, id: 'wrapper' },
  Qi = J(() =>
    e('div', { id: 'messageBox' }, [e('h3', null, 'Meddelanden')], -1)
  ),
  zi = J(() =>
    e(
      'li',
      { id: 'wrapper2', class: 'dateList' },
      ' Du har \xE4nnu inga kontakter. B\xF6rja dejta f\xF6r att skapa nya kontakter. ',
      -1
    )
  )
function Xi(t, s, d, p, i, n) {
  const l = c('router-link')
  return i.users
    ? (r(),
      o('div', Ai, [
        Ki,
        (r(!0),
        o(
          m,
          null,
          y(
            i.users,
            (a) => (
              r(),
              o('ul', { key: a.id }, [
                u(
                  l,
                  { id: 'router', to: '/chat/' + a.id },
                  {
                    default: f(() => [
                      e('li', Oi, [
                        e(
                          'img',
                          {
                            width: '50',
                            class: 'pics',
                            src: i.usersData[a.id - 1].picture,
                            alt: 'Profile picture'
                          },
                          null,
                          8,
                          qi
                        ),
                        e('p', null, g(i.usersData[a.id - 1].name), 1),
                        e('p', null, g(i.usersData[a.id - 1].age) + ' \xE5r', 1)
                      ])
                    ]),
                    _: 2
                  },
                  1032,
                  ['to']
                )
              ])
            )
          ),
          128
        ))
      ]))
    : (r(),
      o('div', Gi, [
        Qi,
        e('ul', null, [
          u(l, { id: 'router', to: '/date' }, { default: f(() => [zi]), _: 1 })
        ])
      ]))
}
var Yi = v(Ui, [
  ['render', Xi],
  ['__scopeId', 'data-v-80bf3c6e']
])
const Wi = {
  components: { ResponsiveNavigation: $, ChatList: Yi },
  data() {
    return {
      navLinks: [
        { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
        { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
        { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
        { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
        { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
        { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
      ]
    }
  }
}
function Zi(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('ChatList')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        u(a)
      ],
      64
    )
  )
}
var en = v(Wi, [['render', Zi]])
const tn = {
    components: { ResponsiveNavigation: $ },
    data() {
      return {
        message: '',
        user: w,
        questionsList: [{ id: 1 }, { id: 2 }, { id: 3 }],
        navLinks: [
          { text: 'Home', path: '/lounge', icon: 'ion-ios-home' },
          { text: 'Start dating', path: '/date', icon: 'ion-ios-thumbs-up' },
          { text: 'Messages', path: '/chat', icon: 'ion-ios-mail' },
          { text: 'Favourites', path: '/favorites', icon: 'ion-ios-heart' },
          { text: 'Edit profile', path: '/edit', icon: 'ion-ios-create' },
          { text: 'Log out', path: '/', icon: 'ion-ios-log-out' }
        ],
        questions: [
          'Om du skulle starta en organisation inom v\xE4lg\xF6renhet, vad skulle det is\xE5fall vara om?',
          'Vad \xE4r det roligaste du sett online under senare tid?',
          'Vad inneb\xE4r sj\xE4lvf\xF6rb\xE4ttring f\xF6r dig?',
          'Finns det n\xE5gon typ webbsida eller app som inte existerar i dagsl\xE4get, men som du verkligen \xF6nskar gjorde?',
          'N\xE4r n\xE5gon f\xE5r reda p\xE5 till exempel vad du jobbar med eller var du kommer ifr\xE5n, finns det n\xE5gon f\xF6ljdfr\xE5ga som de st\xE4ller som ofta \xE5terkommer?',
          '\xC4r du som mest produktiv p\xE5 morgonen eller kv\xE4llen? Tror du att det \xE4r m\xF6jligt att f\xF6r\xE4ndra detta och v\xE4nja sig till ett nytt schema, is\xE5fall hur?',
          'Finns det n\xE5got \xE4mne du kan prata om non-stop i 20 minuter, utan n\xE5gon f\xF6rberedelse?',
          'Har du n\xE5gon quilty pleasure?',
          'Finns det n\xE5gon person som inspirerar dig?',
          'Vilka \xE4mnen borde man l\xE4ra sig i skolan och vilka borde man inte?',
          'Vilket \xE4r det st\xF6rsta fordonet som du har k\xF6rt?',
          'Vilken ny regel tycker du ska inf\xF6ras i den sport som du \xE4r mest intresserad av?',
          'Hur ser den perfekta frukosten ut f\xF6r dig?',
          'Om du kunde v\xE4lja dina dr\xF6mmar, vad skulle du f\xF6redra att dr\xF6mma om?',
          'Vad s\xE4ger dig mest om en person?',
          'Vilka \xE4r dom b\xE4sta skorna som du n\xE5gonsin haft?',
          'Vilken \xE4r din favorit kombination av mat?',
          'Finns det n\xE5got du \xF6nskar var olagligt?',
          'Vad \xE4r ett problem du har, som du anser \xE4r unikt f\xF6r dig?',
          'Vad motiverar dig mest?',
          'Vilken \xE4r den b\xE4sta platsen f\xF6r dig f\xF6r att avnjuta en god kopp kaffe?',
          'Vilken f\xE4rdighet eller talang skulle du helst vilja l\xE4ra dig?',
          'Vilken kultur skulle du vilja l\xE4ra dig mer om?',
          'Vilket stort problem tror du tekniken kommer att l\xF6sa h\xE4rn\xE4st?',
          'Vilket \xE4r det st\xF6rsta \xE4ventyret du har varit med om?',
          'Vad tycker du g\xF6r en bra dag?',
          'Vad vill du g\xF6ra n\xE4r du g\xE5r i pension?',
          'Vilka offentliga utrymmen trivs du b\xE4st i?',
          'Vem var din favorit l\xE4rare?',
          'Hur ofta dansar du?',
          'Vilken leksak hatade du som mest som barn?',
          'Finns det n\xE5got tillf\xE4lle d\xE5 du var helt utanf\xF6r din comfort-zone?',
          'Vad \xE4r det mest kreativa du har \xE5stadkommit?',
          '\xC4r det n\xE5gonting du ser fram emot?',
          'Tror du att det universum vi lever i \xE4r en simulering?',
          'Vilket \xE4r det s\xE4msta r\xE5det du n\xE5gonsin f\xE5tt?',
          'Vad \xE4r det som utm\xE4rker sig mest i den stad du bor i?'
        ]
      }
    },
    methods: {
      randomQuestion() {
        let t = this.questions.length,
          s = Math.floor(Math.random() * t)
        return this.questions[s]
      },
      reloadPage() {
        window.location.reload()
      },
      sendQuestion(t) {
        let s = t.target.innerText
        localStorage.setItem('chosenQuestion', s),
          console.log(t.target.innerText)
      }
    }
  },
  sn = (t) => (k('data-v-2aff739a'), (t = t()), b(), t),
  nn = { class: 'icbreaker-container' },
  an = sn(() =>
    e(
      'div',
      { class: 'icebreaker-info' },
      [
        e(
          'h1',
          null,
          ' Vi har satt ihop ett par fr\xE5gor som kan hj\xE4lpa dig att f\xF6ra ditt samtal vidare '
        ),
        e(
          'p',
          null,
          ' Tryck p\xE5 en av nedanst\xE5ende fr\xE5gor f\xF6r att skicka ditt meddelande och bibeh\xE5ll er gnista! '
        )
      ],
      -1
    )
  ),
  rn = { class: 'icbreaker-questions' }
function on(t, s, d, p, i, n) {
  const l = c('ResponsiveNavigation'),
    a = c('router-link')
  return (
    r(),
    o(
      m,
      null,
      [
        u(
          l,
          {
            'nav-links': i.navLinks,
            background: '#fff',
            'link-color': '#5E5E5E',
            'hover-background': '#ddd'
          },
          null,
          8,
          ['nav-links']
        ),
        e('div', nn, [
          an,
          e('div', rn, [
            e('ul', null, [
              u(
                a,
                { id: 'router', to: '/chat/' + this.$route.params.profileid },
                {
                  default: f(() => [
                    (r(!0),
                    o(
                      m,
                      null,
                      y(
                        i.questionsList,
                        (h) => (
                          r(),
                          o(
                            'li',
                            {
                              onClick:
                                s[0] || (s[0] = (x) => n.sendQuestion(x)),
                              key: h
                            },
                            g(n.randomQuestion()),
                            1
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ['to']
              )
            ])
          ]),
          e(
            'button',
            {
              class: 'reloadBtn',
              onClick:
                s[1] || (s[1] = (...h) => n.reloadPage && n.reloadPage(...h))
            },
            'Uppdatera'
          )
        ])
      ],
      64
    )
  )
}
var ln = v(tn, [
  ['render', on],
  ['__scopeId', 'data-v-2aff739a']
])
const dn = R({
    history: U(),
    routes: [
      { component: ve, path: '/' },
      { component: Ne, path: '/signin' },
      { component: We, path: '/signup' },
      { component: Ze, path: '/products' },
      { component: et, path: '/support' },
      { component: Tt, path: '/edit' },
      { component: as, path: '/date' },
      { component: Ss, path: '/chat/:profileid' },
      { component: Ts, path: '/favorites' },
      { component: Zs, path: '/favorite/:profileid' },
      { component: Ri, path: '/lounge', name: 'lounge' },
      { component: en, path: '/chat' },
      { component: ln, path: '/icebreaker/:profileid' }
    ]
  }),
  un = {
    setUser(t, s) {
      t.user = s
    },
    setPassword(t, s) {
      t.password = s
    },
    setEmail(t, s) {
      t.email = s
    },
    setName(t, s) {
      t.name = s
    },
    setAge(t, s) {
      t.age = s
    },
    setInterests(t, s) {
      t.interests = s
    },
    setBiography(t, s) {
      t.biography = s
    },
    setPicture(t, s) {
      t.picture = s
    },
    setButton(t, s) {
      t.button = s
    }
  },
  cn = {
    user: {},
    password: {},
    email: {},
    name: {},
    age: {},
    interests: {},
    biography: {},
    picture: {},
    button: {}
  }
var pn = A({
  mutations: un,
  plugins: [new K({ storage: localStorage }).plugin],
  state: cn,
  strict: !0
})
O(z).use(dn).use(pn).mount('#app')
