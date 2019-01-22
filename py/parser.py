import networkx
from networkx.readwrite import json_graph
import pydot

graph_netx = networkx.drawing.nx_pydot.read_dot("/home/magre/manu/Input_examples/input1.gv")
lista_nodi = list()
for node in graph_netx.nodes(data=True):
    #print(node)
    if not node[1]:
        id_node = node[0]
        label = node[0]
    else:
        id_node = node[0]
        label = node[1]['label'].replace('"','')
    lista_nodi.append("{ data: { id: '%s', label : '%s' } }" % (id_node, label))
lista_archi = list()
for edge in graph_netx.edges():
    lista_archi.append("{ data: { source: '%s', target: '%s' } }" % (edge[0], edge[1]))

a = ',\n'.join(lista_archi)
n = ',\n'.join(lista_nodi)
data = "elements: {\nnodes: [\n%s\n],\nedges: [\n%s\n]\n}" % (n, a)
print(data)