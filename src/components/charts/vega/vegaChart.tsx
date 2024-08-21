import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';

interface VegaChartProps {
    spec: VisualizationSpec | any;
}

const VegaChart: React.FC<VegaChartProps> = ({ spec }) => {
    return <VegaLite spec={spec} />;
};

export default VegaChart;
