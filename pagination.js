class Pagination {
    constructor(items, itemsPerPage) {
        this.items = items || [];
        this.itemsPerPage = itemsPerPage || 10;
        this.currentPage = 1;
    }

    // Get items for the current page
    getCurrentPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.items.slice(startIndex, endIndex);
    }

    // Get total number of pages
    getTotalPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
    }

    // Go to specific page
    goToPage(pageNumber) {
        if (pageNumber < 1 || pageNumber > this.getTotalPages()) {
            return false;
        }
        this.currentPage = pageNumber;
        return true;
    }

    // Go to next page
    nextPage() {
        return this.goToPage(this.currentPage + 1);
    }

    // Go to previous page
    prevPage() {
        return this.goToPage(this.currentPage - 1);
    }

    // Get current page number
    getCurrentPage() {
        return this.currentPage;
    }

    // Get pagination info
    getPaginationInfo() {
        return {
            currentPage: this.currentPage,
            totalPages: this.getTotalPages(),
            itemsPerPage: this.itemsPerPage,
            totalItems: this.items.length,
            hasNextPage: this.currentPage < this.getTotalPages(),
            hasPrevPage: this.currentPage > 1
        };
    }

    // Update items array
    setItems(newItems) {
        this.items = newItems || [];
        this.currentPage = 1; // Reset to first page
    }

    // Update items per page
    setItemsPerPage(newItemsPerPage) {
        this.itemsPerPage = newItemsPerPage || 10;
        this.currentPage = 1; // Reset to first page
    }
}

// Example usage:
/*
const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const paginator = new Pagination(data, 10);

// Get current page items
console.log(paginator.getCurrentPageItems()); // First 10 items

// Get pagination info
console.log(paginator.getPaginationInfo()); // { currentPage: 1, totalPages: 5, ... }

// Navigate
paginator.nextPage();
console.log(paginator.getCurrentPageItems()); // Next 10 items

paginator.goToPage(3);
console.log(paginator.getCurrentPageItems()); // Items 21-30
*/