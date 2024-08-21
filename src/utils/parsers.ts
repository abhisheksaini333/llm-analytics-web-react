export function parseTableData(text: string) {
    const lines = text.trim().split('\n');

    // Extract columns
    const columns = lines[0].trim().split(/\s+/);

    // Extract data
    const data = lines.slice(1).map(line => {
        // Split the line by whitespace, but ignore the first index column
        return line.trim().split(/\s+/).slice(1);
    });

    return { columns, data };
}

export interface DataObject {
    [key: string]: any;
}

export interface SegregatedData {
    columns: string[];
    data: { [key: string]: any[] };
}

export function segregateData(data: DataObject[]): SegregatedData {
    const columns: string[] = [];
    const dataCollection: { [key: string]: any[] } = {};

    data.forEach(item => {
        Object.keys(item).forEach(key => {
            if (!columns.includes(key)) {
                columns.push(key);
            }
            if (!dataCollection[key]) {
                dataCollection[key] = [];
            }
            dataCollection[key].push(item[key]);
        });
    });

    return { columns, data: dataCollection };
}