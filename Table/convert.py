import pandas as pd
import sys
import os
import json
import csv

source_dir = sys.argv[1]
target_dir = sys.argv[2]
csv_dir = sys.argv[3]

source_files = [x for x in os.listdir(source_dir) if x.lower().endswith('.xlsx')]

for src_file in source_files:
    src_data = pd.read_excel(os.path.join(source_dir, src_file))
    dst_data = []
    
    column_name = src_data.columns.tolist()
    column_name = [x for x in column_name if x[0] != '#']
    for _, row in src_data.iterrows():
        element = dict()

        for key in column_name:
            element[key] = row[key]

        dst_data.append(element)

    dst_file = os.path.join(target_dir, '.'.join(src_file.split('.')[:-1]) + '.json')

    with open(dst_file, 'w') as f:
        json.dump(dst_data, f, indent=4, sort_keys=False, ensure_ascii=False)

    csv_file = os.path.join(csv_dir, '.'.join(src_file.split('.')[:-1]) + '.csv')
    with open(csv_file, 'w', newline='') as f:
        cw = csv.writer(f)
        cw.writerow(column_name)

        for element in dst_data:
            cw.writerow(element[x] for x in column_name)