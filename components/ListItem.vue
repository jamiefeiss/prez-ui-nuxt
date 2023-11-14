<script lang="ts" setup>
import type { ListItemProps } from "../types";

const props = defineProps<ListItemProps>();
</script>

<template>
    <div>
        {{ props.label || props.uri }}
        {{ props.description }}
    </div>
</template>

<style lang="scss" scoped>

</style>