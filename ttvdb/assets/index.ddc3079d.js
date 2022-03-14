import {
  r as w,
  o as t,
  c as o,
  a as n,
  b as m,
  w as g,
  F as f,
  p as v,
  d as y,
  e as _,
  t as h,
  f as S,
  v as N,
  g as I,
  h as k,
  i as $,
  j as x,
  k as V,
  l as P,
  m as R,
  n as H,
  q as M,
  s as Y,
} from './vendor.7bcb5910.js'
const O = function () {
  const a = document.createElement('link').relList
  if (a && a.supports && a.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s)
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const r of i.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && c(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function d(s) {
    const i = {}
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy),
      s.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : s.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function c(s) {
    if (s.ep) return
    s.ep = !0
    const i = d(s)
    fetch(s.href, i)
  }
}
O()
var T = 'ttvdb-logo.png'
var p = (e, a) => {
  const d = e.__vccOpts || e
  for (const [c, s] of a) d[c] = s
  return d
}
const A = {},
  C = (e) => (v('data-v-fc140fda'), (e = e()), y(), e),
  F = C(() =>
    n(
      'a',
      { href: '#/' },
      [n('img', { class: '', logo: '', src: T, alt: 'Site Logo' })],
      -1
    )
  ),
  j = _('Home'),
  B = _('About')
function D(e, a, d, c, s, i) {
  const r = w('RouterLink'),
    l = w('RouterView')
  return (
    t(),
    o(
      f,
      null,
      [
        n('nav', null, [
          F,
          n('ul', null, [
            n('li', null, [m(r, { to: '/' }, { default: g(() => [j]), _: 1 })]),
            n('li', null, [
              m(r, { to: '/about' }, { default: g(() => [B]), _: 1 }),
            ]),
          ]),
        ]),
        n('main', null, [m(l)]),
      ],
      64
    )
  )
}
var E = p(A, [
  ['render', D],
  ['__scopeId', 'data-v-fc140fda'],
])
const G = {
  props: {
    name: { type: String, default: 'John', validator: (e) => e !== '' },
  },
}
function W(e, a, d, c, s, i) {
  return t(), o('p', null, 'V\xE4lkommen, ' + h(d.name) + '!', 1)
}
var q = p(G, [['render', W]])
const U = {
    data() {
      return { message: '' }
    },
    components: { NameComponent: q },
  },
  z = { id: 'app' },
  J = { key: 1 }
function K(e, a, d, c, s, i) {
  const r = w('NameComponent')
  return (
    t(),
    o('div', z, [
      S(
        n(
          'input',
          { 'onUpdate:modelValue': a[0] || (a[0] = (l) => (s.message = l)) },
          null,
          512
        ),
        [[N, s.message]]
      ),
      s.message
        ? (t(), I(r, { key: 0, name: s.message }, null, 8, ['name']))
        : (t(),
          o(
            'p',
            J,
            'Fyll i ditt namn f\xF6r att f\xE5 en v\xE4lkomsth\xE4lsning.'
          )),
    ])
  )
}
var Q = p(U, [['render', K]])
const X = {
    data() {
      return { shows: '', showName: '' }
    },
    watch: {
      showName(e) {
        e.length < 3 ? (this.shows = []) : this.fetchShows()
      },
    },
    methods: {
      storeShow(e) {
        this.$store.commit('saveShowName', this.shows[e].show.name),
          this.$store.commit('saveShowId', this.shows[e].show.id),
          localStorage.setItem(
            'savedShow',
            JSON.stringify(this.shows[e].show.id)
          )
      },
      fetchShows() {
        this.axios
          .get('https://api.tvmaze.com/search/shows?q=' + this.showName)
          .then((e) => {
            this.shows = e.data
          })
      },
      getYear(e) {
        return this.shows[e].show.premiered !== null
          ? ((this.premierYear = this.shows[e].show.premiered.slice(0, 4)),
            this.premierYear)
          : 'Year Not available'
      },
      getSummary(e) {
        return this.shows[e].show.summary.length > 350
          ? ((this.summary = this.shows[e].show.summary.slice(0, 350) + '...'),
            this.summary)
          : this.shows[e].show.summary
      },
      getImage(e) {
        return this.shows[e].show.image === null
          ? './assets/no-image.png'
          : this.shows[e].show.image.medium
      },
    },
    props: {
      name: { type: String, default: 'Star Trek', validator: (e) => e !== '' },
    },
  },
  b = (e) => (v('data-v-50122a66'), (e = e()), y(), e),
  Z = b(() => n('h2', null, 'Find tv show', -1)),
  ee = b(() => n('p', null, 'Type at least three characters to search.', -1)),
  se = { key: 0, class: 'shows-list container' },
  te = ['src'],
  oe = { class: 'shows-list-content' },
  ne = ['innerHTML'],
  ie = { key: 1 },
  re = _(' Read more... '),
  ae = { key: 1 }
function he(e, a, d, c, s, i) {
  const r = w('RouterLink')
  return (
    t(),
    o(
      f,
      null,
      [
        Z,
        ee,
        S(
          n(
            'input',
            {
              class: 'form-control-lg mb-4',
              id: 'showName',
              placeholder: 'Search here',
              'onUpdate:modelValue': a[0] || (a[0] = (l) => (s.showName = l)),
              type: 'text',
            },
            null,
            512
          ),
          [[N, s.showName]]
        ),
        s.shows.length > 0
          ? (t(),
            o('ol', se, [
              (t(!0),
              o(
                f,
                null,
                k(
                  s.shows,
                  (l, u) => (
                    t(),
                    o('li', { key: l.show.id }, [
                      m(
                        r,
                        { to: '/show/' + l.show.id },
                        {
                          default: g(() => [
                            n(
                              'img',
                              {
                                class: 'poster',
                                src: i.getImage(u),
                                alt: 'Show Picture',
                              },
                              null,
                              8,
                              te
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['to']
                      ),
                      n('div', oe, [
                        m(
                          r,
                          {
                            class: 'link-dark lead m-3',
                            to: '/show/' + l.show.id,
                          },
                          { default: g(() => [_(h(l.show.name), 1)]), _: 2 },
                          1032,
                          ['to']
                        ),
                        _(' ' + h(i.getYear(u)) + ' ', 1),
                        l.show.summary
                          ? (t(),
                            o(
                              'p',
                              {
                                key: 0,
                                innerHTML: i.getSummary(u),
                                class: 'mx-3',
                              },
                              null,
                              8,
                              ne
                            ))
                          : (t(),
                            o('p', ie, 'There is no summary for this show.')),
                        m(
                          r,
                          {
                            class: 'show-link link-dark mx-3 my-2',
                            to: '/show/' + l.show.id,
                          },
                          { default: g(() => [re]), _: 2 },
                          1032,
                          ['to']
                        ),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]))
          : $('', !0),
        e.$store.state.showName.length > 0
          ? (t(), o('p', ae, h(e.$store.state.showName), 1))
          : $('', !0),
      ],
      64
    )
  )
}
var le = p(X, [
  ['render', he],
  ['__scopeId', 'data-v-50122a66'],
])
const ce = {
    data() {
      return { showName: '' }
    },
    components: { ShowsList: le },
  },
  de = (e) => (v('data-v-2ae67bc9'), (e = e()), y(), e),
  ue = { class: 'container my-container' },
  _e = de(() => n('h1', null, 'Home', -1))
function me(e, a, d, c, s, i) {
  const r = w('ShowsList')
  return t(), o('div', ue, [_e, m(r)])
}
var pe = p(ce, [
  ['render', me],
  ['__scopeId', 'data-v-2ae67bc9'],
])
const we = {
    created() {
      this.fetchShow()
    },
    data() {
      return {
        isFetching: !0,
        show: '',
        genres: '',
        showLink: '',
        previous: '',
        cast: '',
      }
    },
    computed: {
      sliceYear() {
        return this.show.premiered.slice(0, 4)
      },
    },
    methods: {
      async fetchShow() {
        await this.axios
          .get(
            'https://api.tvmaze.com/shows/' +
              this.$route.params.showid +
              '?embed=cast'
          )
          .then((e) => {
            ;(this.show = e.data),
              (this.genres = this.show.genres),
              (this.showLink = this.show.externals.imdb),
              this.getPrevious(),
              (this.isFetching = !1),
              (this.cast = this.show._embedded.cast.slice(0, 5))
          })
      },
      getYear() {
        return (this.show.premiered === null) | (this.show.premiered === void 0)
          ? '\xC5r ej tillg\xE4ngligt'
          : this.sliceYear
      },
      getImage() {
        return this.show.image === null
          ? './assets/no-image-large.png'
          : this.show.image.original
      },
      getGenre(e) {
        return (this.genre = this.show.genres[e]), this.genre
      },
      getPrevious() {
        return (this.show._links.previousepisode === null) |
          (this.show._links.previousepisode === void 0)
          ? 'Year Not available'
          : (this.axios.get(this.show._links.previousepisode.href).then((e) => {
              this.previous = e.data
            }),
            this.previous)
      },
    },
  },
  L = (e) => (v('data-v-1f1db98a'), (e = e()), y(), e),
  ge = { key: 0, class: 'container' },
  fe = ['src'],
  ve = { class: 'text-wrapper' },
  ye = { key: 0 },
  ke = { key: 1 },
  $e = { key: 2 },
  Se = { key: 0 },
  Ne = { key: 1 },
  be = { key: 0, class: 'cast' },
  Le = _(' Main cast: '),
  Ie = { key: 1 },
  xe = L(() => n('p', null, 'Main cast: No information available.', -1)),
  Ve = [xe],
  Pe = ['innerHTML'],
  Re = { key: 1 },
  He = { key: 0 },
  Me = { key: 1 },
  Ye = { key: 0 },
  Oe = _(' Genres: '),
  Te = { key: 1 },
  Ae = _(' Genres: '),
  Ce = L(() => n('dd', null, 'No genres available.', -1)),
  Fe = [Ae, Ce],
  je = { key: 0 },
  Be = { key: 1 },
  De = { key: 0 },
  Ee = _(' IMDb Page: '),
  Ge = ['href'],
  We = { key: 1 },
  qe = { key: 0 },
  Ue = { key: 1 }
function ze(e, a, d, c, s, i) {
  return s.isFetching
    ? $('', !0)
    : (t(),
      o('div', ge, [
        n('div', null, [
          n(
            'img',
            { class: 'poster', src: i.getImage(), alt: 'Show Picture' },
            null,
            8,
            fe
          ),
        ]),
        n('div', ve, [
          n('h1', null, h(this.show.name) + ' (' + h(i.getYear()) + ')', 1),
          n('div', null, [
            this.show.network
              ? (t(),
                o(
                  'p',
                  ye,
                  ' Network: ' +
                    h(this.show.network.name) +
                    ', ' +
                    h(this.show.network.country.name),
                  1
                ))
              : this.show.webChannel
              ? (t(),
                o('p', ke, ' Platform: ' + h(this.show.webChannel.name), 1))
              : (t(),
                o('p', $e, 'Network: No information about network/platform.')),
          ]),
          n('div', null, [
            (typeof this.show.premiered !== null) &
            (typeof this.show.ended !== null)
              ? (t(),
                o(
                  'p',
                  Se,
                  ' Original run: ' +
                    h(this.show.premiered) +
                    ' - ' +
                    h(this.show.ended),
                  1
                ))
              : (t(), o('p', Ne, 'Original run: No information.')),
          ]),
          this.show._embedded.cast.length > 0
            ? (t(),
              o('div', be, [
                n('dl', null, [
                  Le,
                  (t(!0),
                  o(
                    f,
                    null,
                    k(
                      s.cast,
                      (r) => (
                        t(),
                        o(
                          'dd',
                          { key: r.person.id },
                          h(r.person.name) + ' as ' + h(r.character.name),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : (t(), o('div', Ie, Ve)),
          n('div', null, [
            this.show.summary
              ? (t(),
                o('p', { key: 0, innerHTML: this.show.summary }, null, 8, Pe))
              : (t(), o('p', Re, 'Summary: No summary available.')),
          ]),
          n('div', null, [
            this.show.language
              ? (t(), o('p', He, 'Language: ' + h(this.show.language), 1))
              : (t(), o('p', Me, 'Language: No information.')),
          ]),
          n('div', null, [
            this.show.genres.length
              ? (t(),
                o('dl', Ye, [
                  Oe,
                  (t(!0),
                  o(
                    f,
                    null,
                    k(
                      s.genres,
                      (r, l) => (
                        t(), o('dd', { key: r.length }, h(i.getGenre(l)), 1)
                      )
                    ),
                    128
                  )),
                ]))
              : (t(), o('dl', Te, Fe)),
          ]),
          n('div', null, [
            this.show.rating.average
              ? (t(),
                o(
                  'p',
                  je,
                  ' Average rating: ' + h(this.show.rating.average),
                  1
                ))
              : (t(), o('p', Be, 'Average rating: No information.')),
          ]),
          n('div', null, [
            this.show.externals.imdb
              ? (t(),
                o('p', De, [
                  Ee,
                  n(
                    'a',
                    {
                      href:
                        'https://www.imdb.com/title/' +
                        this.show.externals.imdb,
                    },
                    ' https://www.imdb.com/title/' +
                      h(this.show.externals.imdb),
                    9,
                    Ge
                  ),
                ]))
              : (t(), o('p', We, 'IMDb Page: No link available.')),
          ]),
          n('div', null, [
            this.show._links.previousepisode
              ? (t(),
                o(
                  'p',
                  qe,
                  ' Previous episode: ' +
                    h(this.previous.name) +
                    ' ' +
                    h(this.previous.airdate),
                  1
                ))
              : (t(), o('p', Ue, 'Previous episode: No information.')),
          ]),
        ]),
      ]))
}
var Je = p(we, [
    ['render', ze],
    ['__scopeId', 'data-v-1f1db98a'],
  ]),
  Ke = x({
    mode: 'history',
    hash: !1,
    history: V(),
    routes: [
      { component: Q, path: '/about' },
      { component: pe, path: '/' },
      { component: Je, path: '/show/:showid' },
    ],
  })
const Qe = {
    saveShowName(e, a) {
      e.showName = a
    },
    saveShowId(e, a) {
      e.showId = a
    },
  },
  Xe = { showName: '', showId: '' }
var Ze = P({ mutations: Qe, state: Xe, strict: !0 })
function es(e = {}) {
  const {
    immediate: a = !1,
    onNeedRefresh: d,
    onOfflineReady: c,
    onRegistered: s,
    onRegisterError: i,
  } = e
  let r
  const l = async (u = !0) => {}
  return (
    'serviceWorker' in navigator &&
      ((r = new R('/sw.js', { scope: '/', type: 'classic' })),
      r.addEventListener('activated', (u) => {
        u.isUpdate ? window.location.reload() : c == null || c()
      }),
      r
        .register({ immediate: a })
        .then((u) => {
          s == null || s(u)
        })
        .catch((u) => {
          i == null || i(u)
        })),
    l
  )
}
H(E).use(Ke).use(Ze).use(M, Y).mount('#app')
es()
