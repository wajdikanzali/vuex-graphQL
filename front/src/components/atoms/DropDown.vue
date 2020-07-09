<template name="drop-down">
  <div class="drop-down position-relative">
     <label
      class="label position-absolute pl-3 pt-2"
      :class="defaultState ? 'default' : ''"
      :for="_uid"
      v-text="label" />
    <select
      :id="_uid"
      v-model="selected"
      class="position-relative select w-100 pl-3 mt-0"
      v-on="inputListeners">
      <slot />
    </select>
    <svg-icon
      width="20"
      height="20"
      class="select-arrow position-absolute"
      name="chevron-down" />
  </div>
</template>

<script>
import '@/assets/chevron-down.svg';

import SvgIcon from '@/components/atoms/SvgIcon';

export default {
  name: 'MdmSelect',
  components: {
    SvgIcon,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    defaultState: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  background-color: white;
}

.select {
  font-size: 14px;

  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: 1px solid hsla(0, 0%, 91%, 1);
  border-radius: .125rem;
  height: calculateRem(50px);
  outline: none;

  &:focus {
    border-color: hsla(29, 36%, 64%, 1);
  }
}

.select-arrow {
  pointer-events: none;
  right: calculateRem(16px);
  top: calculateRem(16px);
}

.label {
  font-size: 10px;
  color: hsla(0, 0%, 61%, 1);

  &.default {
    font-size: 14px;
    top: .4em;
  }
}
</style>
