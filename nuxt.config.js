import i18n from './plugins/i18n'
import env from './env'

const path = require('path')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '奥默',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },

    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'video.js/dist/video-js.css',
    {
      src: '@/assets/style/index.scss',
      lang: 'scss'
    }

  ],
  router: {
    middleware: 'i18n'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/request.js',
    '@/plugins/api.js',
    '~/plugins/i18n.js',
    {
      src: '@/plugins/icons',
      ssr: false
    },
    {
      src: '@/plugins/antd-ui',
      mode: false
    },
    {
      src: '~plugins/videoPlayer',
      ssr: false
    },
  ],
  env: {
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
    API_URL: env[process.env.NODE_ENV].API_URL,
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  // 手动配置@nuxtjs/style-resources
  styleResources: {
    scss: [
      // 在这里不能使用路径别名 ～ 和 @
      './assets/style/index.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-px-to-viewport-8-plugin": {
          unitToConvert: "px", // 需要转换的单位，默认为"px"
          viewportWidth: 1920, // 设计稿的视口宽度
          unitPrecision: 5, // 单位转换后保留的精度
          propList: ["*"], // 能转化为vw的属性列表
          viewportUnit: "vw", // 希望使用的视口单位
          fontViewportUnit: "vw", // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media                         (orientation: landscape)
          landscapeUnit: "vw", // 横屏时使用的单位
          landscapeWidth: 1920, // 横屏时使用的视口宽度
        },
      },
    },
    extend(config, ctx) {
      // ...
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]
      // Includes /icons/svg for svg-sprite-loader
      config.module.rules.push({
          test: /\.svg$/,
          include: [path.resolve(__dirname, 'assets/svg')],
          use: [{
            loader: "svg-sprite-loader",
            options: {
              symbolId: "icon-[name]"
            }
          }]
        }),
        config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icons.js') // 引入需要的
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            // 选择子目录 例如 es 表示 ant-design-vue/es/component
            // lib 表示 ant-design-vue/lib/component

            style: 'css'
            // 默认不使用该选项，即不导入样式 , 注意 ant-design-vue 使用 js 文件引入样式
            // true 表示 import  'ant-design-vue/es/component/style' 
            // 'css' 表示 import 'ant-design-vue/es/component/style/css' 
          }
        ]
      ]
    },
    transpile: [/ant-design-vue/],

  },

}
