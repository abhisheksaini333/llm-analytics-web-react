
export function parseTableData(text: string) {
    const lines = text.trim().split('\n');
    const columns = lines[0].trim().split(/\s+/);
    const data = lines.slice(1).map(line => {
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

export function generateVegaSpec(data: string | any[], xField: string | number, yField: string | number, chartType = 'bar') {

    if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid data');
    }

    if (!xField || !yField) {
        throw new Error('xField and yField are required to generate the Vega spec');
    }

    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
            "values": data
        },
        "mark": chartType,
        "encoding": {
            "x": {
                "field": xField,
                "type": typeof data[0][xField] === 'number' ? 'quantitative' : 'ordinal',
                "axis": { "title": xField }
            },
            "y": {
                "field": yField,
                "type": typeof data[0][yField] === 'number' ? 'quantitative' : 'ordinal',
                "axis": { "title": yField }
            }
        }
    };

    return spec;
}

