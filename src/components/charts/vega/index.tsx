import React from 'react';
import VegaChart from './vegaChart';
import { generateVegaSpec } from '../../../utils/parsers';

interface ChartProps {
    data: string;
}

const BarChart: React.FC<ChartProps> = ({ data }) => {

    function parseGenericData(text: string) {
        const lines = text.trim().split('\n');
        const columns = lines[0].trim().split(/\s+/);
        const data = lines.slice(1).map(line => {
            const values = line.trim().split(/\s+/).slice(1); // Ignore the first index column
            const result: { [key: string]: any } = {};
            columns.forEach((column, index) => {
                result[column] = isNaN(Number(values[index])) ? values[index] : Number(values[index]);
            });
            return result;
        });
        return { columns, data };
    }

    const parsedData = parseGenericData(data);
    const vegaSpec = generateVegaSpec(parsedData.data, parsedData.columns[0], parsedData.columns[1], 'bar');

    return (
        <div>
            <VegaChart spec={vegaSpec} />
        </div>
    );
};

export default BarChart;
