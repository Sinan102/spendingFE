import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export const Table = () => {
    const products = [
        { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 100 },
        { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 200 },
        { code: 'P003', name: 'Product 3', category: 'Category 1', quantity: 150 },
        { code: 'P004', name: 'Product 4', category: 'Category 3', quantity: 250 },
        { code: 'P005', name: 'Product 5', category: 'Category 2', quantity: 300 }
    ];

    return (
        <div >
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );

}