<script lang="ts" setup>
import type { ObjectTableProps } from "../types";

const props = defineProps<ObjectTableProps>();
</script>

<template>
    <div>
        <ObjectTableRow v-for="row in props.properties" v-bind="row" />
    </div>
</template>

<style lang="scss" scoped>

</style>