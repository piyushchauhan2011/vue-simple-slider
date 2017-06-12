import './Slider.css'

export default {
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Number,
      default: 0
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    showNav: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      dragStart: 0,
      dragStartTime: new Date(),
      transition: false,
      index: this.$props.selected || 0,
      lastIndex: this.$props.selected || 0,
      mouseDown: false
    }
  },
  methods: {
    goToSlide: function (index, event) {
      const children = this.$slots.default
      const {
        loop,
      } = this.$props

      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      if (index < 0) {
        index = loop ? children.length - 1 : 0
      } else if (index >= children.length) {
        index = loop ? 0 : children.length - 1
      }

      this.index = index
      this.lastIndex = index
      this.transition = true
    },
    getDragX: function (event, isTouch) {
      return isTouch ?
        event.touches[0].pageX :
        event.pageX
    },
    handleDragStart: function (event, isTouch) {
      const x = this.getDragX(event, isTouch)

      this.dragStart = x
      this.dragStartTime = new Date()
      this.transition = false
      this.slideWidth = this.$refs.slider.offsetWidth
      this.mouseDown = true
    },

    handleDragMove: function (event, isTouch) {
      const {
        dragStart,
        lastIndex,
        slideWidth
      } = this

      const x = this.getDragX(event, isTouch)
      const offset = dragStart - x
      const percentageOffset = offset / slideWidth
      const newIndex = lastIndex + percentageOffset
      const SCROLL_OFFSET_TO_STOP_SCROLL = 30

      // Stop scrolling if you slide more than 30 pixels
      if (Math.abs(offset) > SCROLL_OFFSET_TO_STOP_SCROLL) {
        event.stopPropagation()
      }

      this.index = newIndex
    },
    handleDragEnd: function () {
      const children = this.$slots.default
      const {
        dragStartTime,
        index,
        lastIndex
      } = this

      const timeElapsed = new Date().getTime() - dragStartTime.getTime()
      const offset = lastIndex - index
      const velocity = Math.round(offset / timeElapsed * 10000)

      let newIndex = Math.round(index)

      if (Math.abs(velocity) > 5) {
        newIndex = velocity < 0 ? lastIndex + 1 : lastIndex - 1
      }

      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex >= children.length) {
        newIndex = children.length - 1
      }

      this.dragStart = 0
      this.index = newIndex
      this.lastIndex = newIndex
      this.transition = true
      this.mouseDown = false
    },
    renderArrows: function (h) {
      const children = this.$slots.default

      const {
        loop,
        showNav,
      } = this.$props

      const {
        lastIndex
      } = this

      const arrowsClasses = showNav ? 'Slider-arrows' : 'Slider-arrows Slider-arrows--noNav'

      const leftArrowEl = h(
        'button', {
          class: 'Slider-arrow Slider-arrow--left',
          on: {
            click: (e) => this.goToSlide(lastIndex - 1, e)
          }
        }
      )

      const rightArrowEl = h(
        'button', {
          class: 'Slider-arrow Slider-arrow--right',
          on: {
            click: (e) => this.goToSlide(lastIndex + 1, e)
          }
        }
      )

      return (
        <div class={arrowsClasses}>
          {loop || lastIndex > 0 ? leftArrowEl : null}
          {loop || lastIndex < children.length - 1 ? rightArrowEl : null}
        </div>
      )
    },
    renderNav: function (h) {
      const children = this.$slots.default
      const {
        lastIndex
      } = this

      const nav = children.map((slide, i) => {
        const buttonClasses = i === lastIndex ? 'Slider-navButton Slider-navButton--active' : 'Slider-navButton'

        return (
          <button class={buttonClasses} key={i} onClick={(e) => this.goToSlide(i, e)}>
          </button>
        )
      })

      return (
        <div class='Slider-nav'>
          {nav}
        </div>
      )
    }
  },
  render(h) {
    const children = this.$slots.default

    const {
      showArrows,
      showNav
    } = this.$props

    const {
      index,
      transition,
      mouseDown
    } = this

    const slidesStyles = {
      width: `${100 * children.length}%`,
      transform: `translateX(${-1 * index * (100 / children.length)}%)`,
    }
    const slidesClasses = transition ? 'Slider-slides Slider-slides--transition' : 'Slider-slides'

    return (
      <div class="Slider" ref="slider">
        {showArrows ? this.renderArrows(h) : null}
        {showNav ? this.renderNav(h) : null}
        <div
          class="Slider-inner"
          onTouchstart={(e) => this.handleDragStart(e, true)}
          onTouchmove={(e) => this.handleDragMove(e, true)}
          onTouchend={() => this.handleDragEnd()}
          onMousedown={(e) => this.handleDragStart(e, false)}
          onMousemove={(e) => mouseDown ? this.handleDragMove(e, false) : null}
          onMouseup={(e) => this.handleDragEnd()}
          onMouseout={(e) => this.handleDragEnd()}>
          <div class={slidesClasses} style={slidesStyles}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
