<script lang="ts" setup>
import type { ListItemProps } from "../types";
// import { getCatalogs } from "@/utils/service";

const items = ref<ListItemProps[]>([]);

onMounted(async () => {
    // items.value = await getCatalogs();
    items.value = [
        {
            label: "Catalog 1",
            uri: "https://example.com/catalog/1",
            description: "This is a description for Catalog 1"
        },
        {
            label: "Catalog 2",
            uri: "https://example.com/catalog/2",
            description: "This is a description for Catalog 2"
        },
    ];
});
</script>

<template>
    <ListTable :items="items" />
</template>

<style lang="scss" scoped>

</style>