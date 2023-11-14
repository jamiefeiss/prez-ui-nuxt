<script lang="ts" setup>
import type { ListItemProps } from "../types";

const props = defineProps<{
    items: ListItemProps[];

}>();
</script>

<template>
    <div>
        <ListItem v-for="item in props.items" v-bind="item" />
    </div>
</template>

<style lang="scss" scoped>

</style>