import "./Table.scss";

type TableProps = {
  data: Record<string, string>[];
};

export const ResponsiveTable: React.FC<TableProps> = ({ data }) => {
  const header = Object.keys(data[0]);

  return (
    <table
      className="🏓"
      cellPadding="0"
      cellSpacing="0"
      border={0}
      bgcolor="#eeeeee"
      align="left"
      width="100%"
    >
      <thead>
        <tr>
          {header.map((label) => (
            <th data-label={label} key={label}>
              {label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((d, idx) => (
          <tr key={idx}>
            {Object.entries(d).flatMap(([key, value]) => (
              <td data-label={key} key={`${key}-tbody-${value}`}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
