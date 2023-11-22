<script lang="ts" setup>
import { ListItemTableProps } from "../types";

const props = defineProps<ListItemTableProps>();
</script>

<template>
    <div>
        List of {{ props.items.length }} items
        <div v-for="item in props.items">
            <a :href="item.link">{{ item.label || item.uri }}</a>
            <br/>
            <em>{{ item.description }}</em>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>