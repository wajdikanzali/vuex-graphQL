<script>
export default {
  name: 'SvgIcon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '50',
    },
    width: {
      type: String,
      default: 'width',
    },
    height: {
      type: String,
      default: 'height',
    },
    title: {
      type: String,
      default: '',
    },
  },
  render(h, { props, data }) {
    const currentWidth = props.width !== 'width' ? props.width : props.size;
    const currentHeight = props.height !== 'height' ? props.height : props.size;
    const currentTitle = props.title ? (<title>{ props.title }</title>) : null;
    const svg = {
      attrs: {
        viewBox: `0 0 ${currentWidth} ${currentHeight}`,
        width: currentWidth,
        height: currentHeight,
        role: 'img',
      },
    };
    const use = {
      attrs: {
        'xlink:href': `#${props.name}`,
      },
    };
    return (
      <svg {...svg} {...data}>
        { currentTitle }
        <use {...use}/>
      </svg>
    );
  },
};
</script>
