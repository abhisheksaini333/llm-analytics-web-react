import React from 'react';
import VegaChart from './vegaChart';
import { VisualizationSpec } from 'react-vega';

interface ChartProps {
    data: string;
}

const BarChart: React.FC<ChartProps> = ({ data }) => {

    function parseGenericData(dataString: string) {
        const rows = dataString.trim().split('\n');
        const headers = rows[0].trim().split(/\s+/);

        const data = rows.slice(1).map(row => {
            const values: any = row.trim().split(/\s+/);
            let obj: any = {};
            headers.forEach((header, index) => {
                obj[header] = isNaN(values[index]) ? values[index] : parseFloat(values[index]);
            });
            return obj;
        });

        return { headers, data };
    }

    const parsedData = parseGenericData(data);

    function generateVegaSpec(parsedData: { data: any; }, xField: any, yField: any): VisualizationSpec {
        return {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": `Bar chart for ${xField} and ${yField}`,
            "data": {
                "values": parsedData.data
            },
            "mark": "bar",
            "encoding": {
                "x": { "field": xField, "type": "nominal", "axis": { "title": xField } },
                "y": { "field": yField, "type": "quantitative", "axis": { "title": yField } }
            }
        };
    }

    debugger

    const vegaSpec = generateVegaSpec(parsedData, parsedData.headers[1], parsedData.headers[0]);



    const spec: VisualizationSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        description: 'A simple bar chart with embedded data.',
        data: {
            values: [
                { a: 'A', b: 28 },
                { a: 'B', b: 55 },
                { a: 'C', b: 43 },
                { a: 'D', b: 91 },
                { a: 'E', b: 81 },
                { a: 'F', b: 53 },
                { a: 'G', b: 19 },
                { a: 'H', b: 87 },
                { a: 'I', b: 52 },
            ],
        },
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 } },
            y: { field: 'b', type: 'quantitative' },
        },
    };

    return (
        <div>
            <VegaChart spec={vegaSpec} />
        </div>
    );
};

export default BarChart;
